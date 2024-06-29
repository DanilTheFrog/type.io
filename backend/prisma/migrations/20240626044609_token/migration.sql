/*
  Warnings:

  - You are about to drop the column `access` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `refresh` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `Token` table. All the data in the column will be lost.
  - Added the required column `refreshToken` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_agent` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Token" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "user_id" BIGINT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    CONSTRAINT "Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Token" ("expires_at", "uid", "user_id") SELECT "expires_at", "uid", "user_id" FROM "Token";
DROP TABLE "Token";
ALTER TABLE "new_Token" RENAME TO "Token";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
