import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function MealCard({ meal }) {
	console.log(meal.imageUrl);
	return (
		<TouchableOpacity style={styles.container}>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />
			<View style={styles.textContainer}>
				<Text style={styles.text}>Title: {meal.title}</Text>
				<Text style={styles.text}>Duration: {meal.duration} mins.</Text>
				<Text style={styles.text}>Complexity: {meal.complexity}</Text>
				<Text style={styles.text}>Affordability: {meal.affordability}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		width: "100%",
		backgroundColor: "#ddd",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: 10,
		elevation: 4,
		overflow: "hidden",
		padding: 10,
		borderRadius: 8,
	},
	image: {
		width: 140,
		height: 140,
		borderRadius: 4,
	},
	textContainer: {
		flex: 1,
		// backgroundColor: "red",
		justifyContent: "flex-start",
		height: "100%",
	},
	text: {
		color: "black",
	},
});
