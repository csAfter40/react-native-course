import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealsList from "../components/MealsList";

export default function CategoryMeals() {
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const filteredMeals = categoryId
		? MEALS.filter((meal) => meal.categoryIds.includes(categoryId))
		: MEALS;
	if (filteredMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No meals available in this category.</Text>
			</View>
		);
	}
	return <MealsList meals={filteredMeals} />;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
	},
});