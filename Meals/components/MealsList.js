import { FlatList, Text } from "react-native";
import Page from "../components/Page";
import React from "react";
import MealCard from "../components/MealCard";
import { useNavigation } from "@react-navigation/native";

export default function MealsList({ meals }) {
	const navigation = useNavigation();
	function handleMealSelect(mealId) {
		navigation.navigate("MealDetail", { mealId: mealId });
	}
	return (
		<Page>
			{meals.length ? (
				<FlatList
					data={meals}
					renderItem={({ item }) => (
						<MealCard
							meal={item}
							onMealSelect={() => handleMealSelect(item.id)}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			) : (
				<Text>No meals available here.</Text>
			)}
		</Page>
	);
}
