import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import Page from "./Page";

export default function FallbackPage({ text, style, textStyle }) {
	return (
		<Page style={[styles.container, style]}>
			<Text style={[styles.text, textStyle]}>{text}</Text>
		</Page>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
	},
});
