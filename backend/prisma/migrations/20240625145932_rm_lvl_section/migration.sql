/*
  Warnings:

  - You are about to drop the `TypingLevelSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `level_section_id` on the `TypingLevel` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TypingLevelSection";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypingLevel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_TypingLevel" ("created_at", "id", "lang", "name", "text", "updated_at") SELECT "created_at", "id", "lang", "name", "text", "updated_at" FROM "TypingLevel";
DROP TABLE "TypingLevel";
ALTER TABLE "new_TypingLevel" RENAME TO "TypingLevel";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
