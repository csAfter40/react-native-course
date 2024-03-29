import { Text, StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function Button({ text, handlePress, style, textStyle, icon }) {
	return (
		<View style={[styles.container, style]}>
			<Pressable
				style={styles.button}
				onPress={handlePress}
				android_ripple={{ color: Colors.buttonRipple }}
			>
				{icon}
				<Text style={[styles.text, textStyle]}>{text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: Colors.border,
		overflow: "hidden",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
		flex: 1,
	},
	text: {
		fontFamily: "inter-light",
		color: Colors.primaryText,
	},
});
