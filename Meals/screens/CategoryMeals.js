import React from "react";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealsList from "../components/MealsList";

export default function CategoryMeals() {
	const route = useRoute();
	const categoryId = route.params.categoryId;
	const filteredMeals = categoryId
		? MEALS.filter((meal) => meal.categoryIds.includes(categoryId))
		: MEALS;
	return <MealsList meals={filteredMeals} />;
}
