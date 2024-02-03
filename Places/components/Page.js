import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page({ children, style }) {
	return <SafeAreaView style={[styles.page, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		padding: 20,
		width: "100%",
	},
});
