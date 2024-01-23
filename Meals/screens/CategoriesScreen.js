import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Page from "../components/Page";
import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen() {
	const navigation = useNavigation();
	function handleCategorySelect(category) {
		navigation.navigate("CategoryMeals", {
			categoryId: category.id,
			categoryTitle: category.title,
		});
	}
	return (
		<Page>
			<View style={styles.categoriesContainer}>
				<FlatList
					data={CATEGORIES}
					renderItem={({ item }) => (
						<CategoryCard
							style={{ margin: 5 }}
							category={item}
							onCategorySelect={() => handleCategorySelect(item)}
						/>
					)}
					keyExtractor={(item) => item.id}
					horizontal={false}
					numColumns={2}
				/>
			</View>
		</Page>
	);
}

const styles = StyleSheet.create({
	categoriesContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
	},
});
