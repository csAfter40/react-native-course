import { FlatList } from "react-native";
import Page from "../components/Page";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";
import { useNavigation } from "@react-navigation/native";

export default function MealsList() {
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const filteredMeals = categoryId
		? MEALS.filter((meal) => meal.categoryIds.includes(categoryId))
		: MEALS;
	const navigation = useNavigation();
	function handleMealSelect(mealId) {
		navigation.navigate("MealDetail", { mealId: mealId });
	}
	return (
		<Page>
			<FlatList
				data={filteredMeals}
				renderItem={({ item }) => (
					<MealCard
						meal={item}
						onMealSelect={() => handleMealSelect(item.id)}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</Page>
	);
}
