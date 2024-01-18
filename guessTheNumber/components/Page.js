import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function Page({ children, style }) {
	return <View style={[styles.page, style]}>{children}</View>;
}
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: "center",
		gap: 12,
		padding: deviceWidth > 380 ? 40 : 20,
	},
});
