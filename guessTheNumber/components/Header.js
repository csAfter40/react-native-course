import { Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function Header({ children, style }) {
	return <Text style={[styles.header, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	header: {
		fontSize: 24,
		color: Colors.primaryText,
		paddingBottom: 6,
	},
});
