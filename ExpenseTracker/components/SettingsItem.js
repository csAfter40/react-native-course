import { Surface, Text, Switch } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";

export default function SettingsItem({ text, isSwitchOn, onToggleSwitch }) {
	return (
		<Surface style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
		</Surface>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 30,
		height: 60,
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 16,
	},
});
