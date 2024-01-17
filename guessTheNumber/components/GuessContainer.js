import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function GuessContainer({ text, style, textStyle, icon }) {
	return (
		<View style={[styles.container, style]}>
			{icon}
			<Text style={[styles.text, textStyle]}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		backgroundColor: "white",
		borderRadius: 1000,
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 18,
		justifyContent: "flex-start",
	},
	text: {
		fontFamily: "inter-light",
		color: Colors.menuBg,
	},
});
