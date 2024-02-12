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

export function insertPlace(place) {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO place (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)",
				[
					place.title,
					place.imageUri,
					place.address,
					place.latitude,
					place.longitude,
				], // values
				(_, result) => {
					resolve(result);
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}

export function editPlace(placeId, place) {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"UPDATE place SET title = ?, imageUri = ?, address = ?, latitude = ?, longitude = ? WHERE ID = ?",
				[
					place.title,
					place.imageUri,
					place.address,
					place.latitude,
					place.longitude,
					placeId,
				], // values
				(_, result) => {
					resolve(result);
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}

export function getAllPlaces() {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM place",
				[], // values
				(_, { rows }) => {
					resolve(rows._array);
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}

export function getPlaceById(placeId) {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM place WHERE id = ?",
				[placeId], // values
				(_, { rows }) => {
					resolve(rows._array[0]);
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}

export function deletePlace(placeId) {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM place WHERE id = ?",
				[placeId], // values
				(_, response) => {
					resolve(response);
				}, // callback if successful
				(_, error) => {
					reject(error);
				} //callback if error
			);
		});
	});
	return promise;
}