// @generated automatically by Diesel CLI.

diesel::table! {
    bnccs (id) {
        id -> Integer,
        title -> Text,
        body -> Text,
        curriculum -> Text,
        code -> Text,
    }
}

diesel::table! {
    games (id) {
        id -> Integer,
        title -> Text,
    }
}

diesel::table! {
    games_bnccs (id) {
        id -> Integer,
        game_id -> Integer,
        bncc_id -> Integer,
    }
}

diesel::joinable!(games_bnccs -> bnccs (bncc_id));
diesel::joinable!(games_bnccs -> games (game_id));

diesel::allow_tables_to_appear_in_same_query!(
    bnccs,
    games,
    games_bnccs,
);
