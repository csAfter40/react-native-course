import { StyleSheet, View } from "react-native";
import React from "react";

export default function Page({ children, style }) {
	return <View style={[styles.page, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		padding: 20,
		width: "100%",
	},
});
