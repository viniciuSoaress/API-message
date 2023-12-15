/*
  Warnings:

  - You are about to drop the `MessageGet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessagePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MessageGet";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MessagePost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conteudo" TEXT NOT NULL,
    "numberSender" INTEGER NOT NULL,
    "numberfate" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Message_numberSender_fkey" FOREIGN KEY ("numberSender") REFERENCES "User" ("number") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_numberfate_fkey" FOREIGN KEY ("numberfate") REFERENCES "User" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);
