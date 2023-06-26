#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use diesel::SqliteConnection;
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
use std::{env, error::Error, sync::Mutex};
pub mod db;
pub mod schema;

pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations/");

struct AppState {
    conn: Mutex<SqliteConnection>,
}

fn run_migrations(
    connection: &mut SqliteConnection,
) -> Result<(), Box<dyn Error + Send + Sync + 'static>> {
    connection.run_pending_migrations(MIGRATIONS)?;
    Ok(())
}

#[tauri::command]
fn games_list(state: tauri::State<AppState>) -> String {
    let mut con = state.conn.lock().unwrap();
    db::games_list(&mut con)
}

fn main() {
    let conn = &mut db::establish_connection();
    run_migrations(conn).expect("error while running migrations");

    let state = AppState {
        conn: Mutex::new(db::establish_connection()),
    };

    tauri::Builder::default()
        .manage(state)
        .invoke_handler(tauri::generate_handler![games_list])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
