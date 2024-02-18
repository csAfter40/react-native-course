import { View, StyleSheet, Animated } from "react-native";
import { Button, Icon } from "react-native-paper";
import React from "react";
import { useTheme } from "react-native-paper";

export default function ParallelSquare() {
	const theme = useTheme();
	const styles = StyleSheet.create({
		page: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		square: {
			width: 100,
			height: 100,
			borderRadius: 8,
			backgroundColor: theme.colors.primaryContainer,
			alignItems: "center",
			justifyContent: "center",
		},
	});
	const angle = React.useRef(new Animated.Value(0)).current;
	const scale = React.useRef(new Animated.Value(1)).current;
	const DURATION = 600;
	const growAnimation = Animated.timing(scale, {
		toValue: 1.3,
		duration: DURATION / 2,
		useNativeDriver: true,
	});
	const shrinkAnimation = Animated.timing(scale, {
		toValue: 1,
		duration: DURATION / 2,
		useNativeDriver: true,
	});
	const rotateAnimation = Animated.timing(angle, {
		toValue: 1,
		duration: DURATION,
		useNativeDriver: true,
	});

	function resetAnimation() {
		angle.setValue(0);
	}
	function animateSquare() {
		Animated.parallel([
			Animated.sequence([growAnimation, shrinkAnimation]),
			rotateAnimation,
		]).start(resetAnimation);
	}
	const spin = angle.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});
	return (
		<View style={[styles.page, { gap: 50 }]}>
			<Animated.View
				style={[
					{
						transform: [{ scale: scale }, { rotate: spin }],
					},
					styles.square,
				]}
			>
				<Icon
					source="arrow-up-bold-outline"
					color={theme.colors.primary}
					size={40}
				/>
			</Animated.View>
			<Button onPress={animateSquare}>Click me!</Button>
		</View>
	);
}
