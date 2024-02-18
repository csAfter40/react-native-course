import { StyleSheet } from "react-native";
import { Text, TouchableRipple, useTheme } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AnimationCard({ animation }) {
	const theme = useTheme();
	const styles = StyleSheet.create({
		container: {
			width: "100%",
			height: 70,
			alignItems: "center",
			justifyContent: "center",
			marginBottom: 10,
			backgroundColor: theme.colors.surfaceVariant,
			borderRadius: 4,
		},
		text: {
			fontSize: 18,
		},
	});
	const navigation = useNavigation();
	function handleNavigate() {
		navigation.navigate(animation.screenId);
	}
	return (
		<TouchableRipple style={styles.container} onPress={handleNavigate}>
			<Text style={styles.text}>{animation.title}</Text>
		</TouchableRipple>
	);
}
