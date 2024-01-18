import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function UIContainer({ children, style }) {
	const { width, height } = useWindowDimensions();
	const isLandscape = height < width;
	const responsiveStyle = {
		marginTop: isLandscape ? 0 : 80,
		flex: isLandscape ? 1 : 0,
	};
	return <View style={[styles.uiContainer, responsiveStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	uiContainer: {
		padding: 20,
		paddingVertical: 30,
		backgroundColor: Colors.menuBg,
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
		width: "100%",
		maxWidth: 400,
		borderRadius: 8,
		elevation: 6,
		// marginTop: 0,
	},
});
