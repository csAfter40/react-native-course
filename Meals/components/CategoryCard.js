import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard({ category }) {
	return (
		<TouchableOpacity
			style={[styles.cardContainer, { backgroundColor: category.color }]}
		>
			<Text style={styles.cardText}>{category.title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		width: 150,
		height: 150,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
		elevation: 4,
	},
	cardText: {
		color: "black",
		fontSize: 20,
	},
});
