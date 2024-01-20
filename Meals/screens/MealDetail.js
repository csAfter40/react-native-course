import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

export default function MealDetail() {
	const route = useRoute();
	const mealId = route.params.mealId;
	const meal = MEALS.find((meal) => {
		return meal.id === mealId;
	});
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>MealDetail for {meal.title}</Text>
		</View>
	);
}
