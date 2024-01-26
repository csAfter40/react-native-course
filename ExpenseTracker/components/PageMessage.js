import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PageMessage({ message }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	text: {
		fontSize: 18,
		textAlign: "center",
	},
});
