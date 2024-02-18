import { View, StyleSheet, Animated } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function MoveBall() {
	const initialPosition = { x: 0, y: 0 };
	const position = React.useRef(new Animated.ValueXY(initialPosition)).current;

	function moveBall() {
		Animated.timing(position, {
			toValue: { x: -50, y: -100 },
			duration: 200,
			useNativeDriver: true,
		}).start();
	}
	return (
		<View style={styles.page}>
			<Animated.View
				style={[
					{
						transform: [
							{ translateX: position.x },
							{ translateY: position.y },
						],
					},
					styles.ball,
				]}
			></Animated.View>
			<Button onPress={moveBall}>Click me!</Button>
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
