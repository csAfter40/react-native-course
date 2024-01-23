import React from "react";
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
	return <MealsList meals={favouriteMeals} />;
}
