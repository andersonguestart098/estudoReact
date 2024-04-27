import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      {/* Aponte diretamente para o servidor backend em http://localhost:3001 */}
      <a href="https://localhost:3001/auth/google">
        <button>Login with Google</button>
      </a>
    </div>
  );
};

export default LoginPage;
