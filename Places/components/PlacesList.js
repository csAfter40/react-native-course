import { StyleSheet, FlatList } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";
import FallbackPage from "./FallbackPage";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";

export default function PlacesList({ places, style }) {
	const navigation = useNavigation();
	function handleCardSelect(id) {
		navigation.navigate("PlaceDetail", { placeId: id });
	}
	return (
		<>
			{!places || places.length === 0 ? (
				<FallbackPage text={"No places available at the moment"} />
			) : (
				<FlashList
					data={places}
					renderItem={({ item }) => (
						<PlaceCard
							place={item}
							handleCardSelect={() => handleCardSelect(item.id)}
						/>
					)}
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
