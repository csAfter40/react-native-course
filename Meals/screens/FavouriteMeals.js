import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { DataContext } from "../store/context/DataProvider";
import MealsList from "../components/MealsList";

export default function FavouriteMeals() {
	const { favourites } = React.useContext(DataContext);
	const [favouriteMeals, setFavouriteMeals] = React.useState([]);
	React.useEffect(() => {
		if (favourites.size) {
			setFavouriteMeals(MEALS.filter((meal) => favourites.has(meal.id)));
		} else {
			setFavouriteMeals([]);
		}
	}, [favourites]);
	if (favouriteMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No favourite meals available</Text>
			</View>
		);
	}
	return <MealsList meals={favouriteMeals} />;
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