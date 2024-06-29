/*
  Warnings:

  - Added the required column `lang` to the `TypingLevelSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TypingLevelSection` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypingLevelSection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_TypingLevelSection" ("created_at", "id", "updated_at") SELECT "created_at", "id", "updated_at" FROM "TypingLevelSection";
DROP TABLE "TypingLevelSection";
ALTER TABLE "new_TypingLevelSection" RENAME TO "TypingLevelSection";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
