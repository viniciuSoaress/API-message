-- CreateTable
CREATE TABLE "User" (
    "number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MessagePost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "numberSender" INTEGER NOT NULL,
    CONSTRAINT "MessagePost_numberSender_fkey" FOREIGN KEY ("numberSender") REFERENCES "User" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MessageGet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "numberFate" INTEGER NOT NULL,
    CONSTRAINT "MessageGet_numberFate_fkey" FOREIGN KEY ("numberFate") REFERENCES "User" ("number") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");
