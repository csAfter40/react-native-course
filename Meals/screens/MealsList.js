import { View, Text, StyleSheet, FlatList } from "react-native";
import Page from "../components/Page";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";

export default function MealsList() {
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const categoryMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
	return (
		<Page>
			<FlatList
				data={categoryMeals}
				renderItem={({ item }) => <MealCard meal={item} />}
				keyExtractor={(item) => item.id}
			/>
		</Page>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
	},
});
