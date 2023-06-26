-- Your SQL goes here
CREATE TABLE bnccs (
  id INTEGER NOT NULL PRIMARY KEY,
  title VARCHAR NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  curriculum TEXT NOT NULL DEFAULT '',
  code VARCHAR NOT NULL,
  UNIQUE (code)
);
