use diesel::prelude::*;
use serde::{Serialize, Deserialize};

#[derive(Queryable, Selectable, Serialize, Deserialize)]
#[diesel(table_name = crate::schema::bnccs)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Bncc {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub curriculum: String,
    pub code: String,
}

#[derive(Queryable, Selectable, Serialize, Deserialize)]
#[diesel(table_name = crate::schema::games)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Game {
    pub id: i32,
    pub title: String,
}
