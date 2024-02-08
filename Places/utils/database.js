import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

export function initDb() {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS place (
                    id INTEGER PRIMARY KEY NOT NULL, 
                    title TEXT NOT NULL, 
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    latitude REAL NOT NULL,
                    longitude REAL NOT NULL
                )`,
				[], // values
				() => {
					resolve();
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}
