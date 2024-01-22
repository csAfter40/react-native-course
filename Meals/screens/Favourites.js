import { FlatList, Text } from "react-native";
import Page from "../components/Page";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../components/DataProvider";

export default function Favourites() {
	const { favourites } = React.useContext(DataContext);
	const [favouriteMeals, setFavouriteMeals] = React.useState([]);
	React.useEffect(() => {
		if (favourites.size) {
			setFavouriteMeals(MEALS.filter((meal) => favourites.has(meal.id)));
		} else {
			setFavouriteMeals([]);
		}
	}, [favourites]);
	const navigation = useNavigation();
	function handleMealSelect(mealId) {
		navigation.navigate("MealDetail", { mealId: mealId });
	}
	return (
		<Page>
			{favouriteMeals.length ? (
				<FlatList
					data={favouriteMeals}
					renderItem={({ item }) => (
						<MealCard
							meal={item}
							onMealSelect={() => handleMealSelect(item.id)}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			) : (
				<Text>No favourite meals available</Text>
			)}
		</Page>
	);
}
