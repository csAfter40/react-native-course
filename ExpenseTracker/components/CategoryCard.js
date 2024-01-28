import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { FAB } from "react-native-paper";

export default function CategoryCard({ category, onCategorySelect, style, textStyle }) {
	return (
		<View style={[styles.container, style]}>
			<FAB icon={category.icon} onPress={onCategorySelect} size="large" />
			<Text style={textStyle}>{category.title}</Text>
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
});
