import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

export default function DetailItem({ children, title, text }) {
	const theme = useTheme();
	const styles = StyleSheet.create({
		mainContainer: {
			paddingVertical: 20,
			flexDirection: "row",
			alignItems: "flex-start",
		},
		headerContainer: {
			flex: 1,
		},
		detailContainer: {
			flex: 3,
		},
		headerText: {
			fontSize: 16,
			fontWeight: "600",
			color: theme.colors.primary,
		},
		detailText: {
			fontSize: 16,
			fontWeight: "300",
			color: theme.colors.secondary,
		},
	});
	return (
		<View style={styles.mainContainer}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
			<View style={styles.detailContainer}>
				{text && <Text style={styles.detailText}>{text}</Text>}
				{children}
			</View>
		</View>
	);
}
