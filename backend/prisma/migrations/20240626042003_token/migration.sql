-- CreateTable
CREATE TABLE "Token" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "user_id" BIGINT NOT NULL,
    "refresh" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    CONSTRAINT "Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
