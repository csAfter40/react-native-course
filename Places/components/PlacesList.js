import { StyleSheet, FlatList } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";
import FallbackPage from "./FallbackPage";
import { FlashList } from "@shopify/flash-list";

export default function PlacesList({ places, style }) {
	return (
		<>
			{!places || places.length === 0 ? (
				<FallbackPage text={"No places available at the moment"} />
			) : (
				<FlashList
					data={places}
					renderItem={({ item }) => <PlaceCard place={item} />}
					keyExtractor={(item) => item.id}
					style={[styles.container, style]}
					estimatedItemSize={100}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
