import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoveBall from "../screens/MoveBall";

export default function MainStack() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="MoveBall"
			screenOptions={{
				headerTitleAlign: "center",
				animation: "slide_from_right",
				contentStyle: { backgroundColor: null },
			}}
		>
			<Stack.Screen
				name="MoveBall"
				component={MoveBall}
				options={{ headerTitle: "Move the Ball" }}
			/>
		</Stack.Navigator>
	);
}
