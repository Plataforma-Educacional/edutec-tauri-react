-- Your SQL goes here
CREATE TABLE games_bnccs (
  id INTEGER NOT NULL PRIMARY KEY,
  game_id INTEGER NOT NULL,
  bncc_id INTEGER NOT NULL,
  FOREIGN KEY (game_id) REFERENCES games (id),
  FOREIGN KEY (bncc_id) REFERENCES bnccs (id)
);