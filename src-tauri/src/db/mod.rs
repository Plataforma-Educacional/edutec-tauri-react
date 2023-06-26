pub mod models;
use crate::schema::*;
use diesel::prelude::*;
use dotenvy::dotenv;
use models::*;
use std::env;

pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn games_list(conn: &mut SqliteConnection) -> String {
    let all_games = games::dsl::games
        .load::<Game>(conn)
        .expect("Expect loading posts");

    let serialized = serde_json::to_string(&all_games).unwrap();
    serialized
}
