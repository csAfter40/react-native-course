import { View, StyleSheet, Animated } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function FadeBall() {
	const initialOpacity = 0;
	const opacity = React.useRef(new Animated.Value(initialOpacity)).current;

	function fadeIn() {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 1200,
			useNativeDriver: true,
		}).start();
	}
	function fadeOut() {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 1200,
			useNativeDriver: true,
		}).start();
	}
	return (
		<View style={styles.page}>
			<Animated.View
				style={[
					{
						opacity: opacity,
					},
					styles.ball,
				]}
			></Animated.View>
			<Button onPress={fadeIn}>Fade In</Button>
			<Button onPress={fadeOut}>Fade Out</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	ball: {
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
		backgroundColor: "red",
	},
});
