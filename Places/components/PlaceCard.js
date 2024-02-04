import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Text, TouchableRipple } from "react-native-paper";

export default function PlaceCard({ place, handleCardSelect }) {
	return (
		<TouchableRipple style={styles.cardContainer} onPress={handleCardSelect}>
			{/* <Surface style={styles.cardContainer}> */}
			<Image style={styles.image} source={{ uri: place.imageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
			{/* </Surface> */}
		</TouchableRipple>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	textContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
	},
	image: {
		width: 70,
		height: 70,
		margin: 5,
	},
});
