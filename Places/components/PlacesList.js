import { StyleSheet, FlatList } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";

export default function PlacesList({ places, style }) {
	return (
		<FlatList
			data={places}
			renderItem={({ item }) => <PlaceCard place={item} />}
			keyExtractor={(item) => item.id}
			style={[styles.container, style]}
		/>
	);
}

const styles = StyleSheet.create({
	container: {},
});
