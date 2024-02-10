import { StyleSheet } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default function PlaceCard({ place, handleCardSelect }) {
	const theme = useTheme();
	const styles = StyleSheet.create({
		listItem: {
			padding: 0,
			paddingLeft: 10,
			backgroundColor: theme.colors.surfaceVariant,
			marginBottom: 5,
		},
	});
	return (
		<List.Item
			title={place.title}
			description={place.address}
			left={() => <List.Image source={{ uri: place.imageUri }} />}
			onPress={() => console.log("pressedsas!")}
			style={styles.listItem}
		/>
	);
}
