import express from "express";
import cors from "cors";
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import reportsRoutes from "./reportRoutes";
import prisma from './prisma';
import fs from 'fs';
import https from 'https';

require('dotenv').config();

// Verifica se as variáveis de ambiente estão definidas
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.SESSION_SECRET) {
    console.error("Missing environment variables. Set all variables in .env file.");
    process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Configurações do CORS
app.use(cors({
  origin: 'https://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Configurações da sessão
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Inicialização e configuração do Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://localhost:3001/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
      const user = await saveOrUpdateUser(profile);
      done(null, user);
  } catch (error:any) {
      done(new Error("Failed to save or update user: " + error.message));
  }
}));

async function saveOrUpdateUser(profile: Profile) {
  return await prisma.user.upsert({
      where: { googleId: profile.id },
      create: {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : null,
          image: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null
      },
      update: {
          name: profile.displayName,
          image: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null
      }
  });
}

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    done(null, { id });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
    res.redirect('https://localhost:3000/');
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
      if (err) {
          console.error('Logout failed:', err);
          return res.redirect('/login');
      }
      res.redirect('https://localhost:3000/login');
  });
});

app.use("/reports", reportsRoutes);

// SSL/TLS Certificates
const privateKey = fs.readFileSync('localhost+2-key.pem', 'utf8');
const certificate = fs.readFileSync('localhost+2.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server running on https://localhost:${PORT}`);
});
