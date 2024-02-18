import { View, StyleSheet, Animated, Easing } from "react-native";
import { Button, Text } from "react-native-paper";
import React from "react";

function Square({ trigger, easing, title }) {
	const position = React.useRef(new Animated.Value(0)).current;
	function moveSquare() {
		Animated.timing(position, {
			toValue: 250,
			duration: 1200,
			easing: easing ? easing : Easing.linear,
			useNativeDriver: true,
		}).start();
	}
	function resetPosition() {
		position.setValue(0);
	}
	React.useEffect(() => {
		if (trigger) {
			moveSquare();
		} else {
			resetPosition();
		}
	}, [trigger]);
	return (
		<Animated.View
			style={[
				{
					transform: [{ translateX: position }],
				},
				styles.square,
			]}
		>
			<Text>{title}</Text>
		</Animated.View>
	);
}

export default function EaseSquare() {
	const [trigger, setTrigger] = React.useState(false);
	return (
		<View style={styles.page}>
			<View style={styles.animationContainer}>
				<Square trigger={trigger} easing={Easing.linear} title="linear" />
				<Square trigger={trigger} easing={Easing.bounce} title="bounce" />
				<Square trigger={trigger} easing={Easing.ease} title="ease" />
				<Square trigger={trigger} easing={Easing.elastic(4)} title="elastic" />
				<Square
					trigger={trigger}
					easing={Easing.bezier(0, 2, 1, -1)}
					title="bezier"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					labelStyle={{ fontSize: 20 }}
					onPress={() => setTrigger(true)}
				>
					Start
				</Button>
				<Button
					style={styles.button}
					labelStyle={{ fontSize: 20 }}
					onPress={() => setTrigger(false)}
				>
					Reset
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	animationContainer: {
		flex: 1,
		width: "100%",
		padding: 20,
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 20,
	},
	buttonContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	square: {
		width: 100,
		height: 100,
		borderRadius: 8,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginVertical: 20,
	},
});
