import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimationsList from "../screens/AnimationsList";
import MoveBall from "../screens/MoveBall";
import FadeBall from "../screens/FadeBall";

export default function MainStack() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="AnimationsList"
			screenOptions={{
				headerTitleAlign: "center",
				animation: "slide_from_right",
				contentStyle: { backgroundColor: null },
			}}
		>
			<Stack.Screen
				name="AnimationsList"
				component={AnimationsList}
				options={{ headerTitle: "All Animations" }}
			/>
			<Stack.Screen
				name="MoveBall"
				component={MoveBall}
				options={{ headerTitle: "Move the Ball" }}
			/>
			<Stack.Screen
				name="FadeBall"
				component={FadeBall}
				options={{ headerTitle: "Fade the Ball" }}
			/>
		</Stack.Navigator>
	);
}
