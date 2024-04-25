-- CreateTable
CREATE TABLE "Report" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localizacao" TEXT NOT NULL,
    "tipoArea" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "numeroTelefone" TEXT NOT NULL
);
