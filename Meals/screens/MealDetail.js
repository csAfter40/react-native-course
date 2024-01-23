import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import Page from "../components/Page";
import { DataContext } from "../store/context/DataProvider";
import FavouriteStar from "../components/FavouriteStar";

export default function MealDetail({ navigation }) {
	const { favourites, addToFavourites, removeFromFavourites } =
		React.useContext(DataContext);
	const [isFavourite, setIsFavourite] = React.useState(false);
	const route = useRoute();
	const mealId = route.params.mealId;
	const meal = MEALS.find((meal) => {
		return meal.id === mealId;
	});

	function toggleFavourite() {
		isFavourite ? removeFromFavourites(mealId) : addToFavourites(mealId);
	}
	React.useEffect(() => {
		if (favourites.has(mealId)) {
			setIsFavourite(true);
		} else {
			setIsFavourite(false);
		}
	}, [favourites]);
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<FavouriteStar isFavourite={isFavourite} onPress={toggleFavourite} />
				);
			},
		});
	}, [isFavourite]);
	return (
		<Page>
			<ScrollView style={styles.scroll}>
				<Image style={styles.image} source={{ uri: meal.imageUrl }} />
				<Text style={styles.title}>{meal.title}</Text>
				<View style={styles.mealPropertyContainer}>
					<Text style={styles.text}>{meal.duration} mins.</Text>
					<Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
					<Text style={styles.text}>{meal.affordability.toUpperCase()}</Text>
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.header}>Ingredients:</Text>
					{meal.ingredients.map((ingredient, index) => (
						<Text key={index}>
							{"   *"} {ingredient}
						</Text>
					))}
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.header}>Steps:</Text>
					{meal.steps.map((ingredient, index) => (
						<Text key={index}>
							{"   "}
							{index + 1}. {ingredient}
						</Text>
					))}
				</View>
			</ScrollView>
		</Page>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
		paddingHorizontal: 10,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
		textAlign: "center",
		marginVertical: 10,
	},
	mealPropertyContainer: {
		alignSelf: "center",
		flexDirection: "row",
		gap: 10,
	},
	sectionContainer: {
		marginVertical: 10,
	},
	header: {
		fontWeight: "600",
		marginBottom: 5,
	},
});
