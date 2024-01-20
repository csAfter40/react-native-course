import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function MealCard({ meal, onMealSelect }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onMealSelect}>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />
			<View style={styles.textContainer}>
				<Text style={[styles.text, styles.textHeader]}>{meal.title}</Text>
				<View>
					<Text style={styles.text}>Duration: {meal.duration} mins.</Text>
					<Text style={styles.text}>Complexity: {meal.complexity}</Text>
					<Text style={styles.text}>Affordability: {meal.affordability}</Text>
				</View>
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
		height: 120,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 4,
	},
	textContainer: {
		flex: 1,
		justifyContent: "space-between",
		height: "100%",
	},
	text: {
		color: "black",
	},
	textHeader: {
		fontWeight: "600",
		marginBottom: 5,
		fontSize: 16,
	},
});
