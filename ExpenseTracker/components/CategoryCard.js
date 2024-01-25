import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";

export default function CategoryCard({ category, onCategorySelect, style, textStyle }) {
	return (
		<View style={[styles.container, style]}>
			<FAB icon={category.icon} onPress={onCategorySelect} size="large" />
			<Text style={[styles.text, textStyle]}>{category.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
	text: {},
});
