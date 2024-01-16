import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function GuessContainer({ text, style, textStyle }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "white",
		borderRadius: 1000,
		alignItems: "flex-start",
		paddingVertical: 8,
		paddingHorizontal: 18,
		justifyContent: "center",
	},
	text: {
		fontFamily: "inter-light",
		color: Colors.menuBg,
	},
});
