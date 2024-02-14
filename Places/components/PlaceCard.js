import { StyleSheet } from "react-native";
import React from "react";
import { List, Icon } from "react-native-paper";
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
			description={place.address || "No address info available"}
			left={() => (
				<List.Image
					source={
						place.imageUri
							? {
									uri: place.imageUri,
							  }
							: require("../assets/images/defaultImage.jpg")
					}
				/>
			)}
			onPress={handleCardSelect}
			style={styles.listItem}
		/>
	);
}
