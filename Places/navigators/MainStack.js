import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackHeader from "../components/StackHeader";
import AddPlace from "../screens/AddPlace";
import AllPlaces from "../screens/AllPlaces";

export default function MainStack() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="AllPlaces"
			screenOptions={{
				header: ({ navigation, route, options, back }) => (
					<StackHeader
						navigation={navigation}
						route={route}
						options={options}
						back={back}
					/>
				),
				contentStyle: { backgroundColor: null },
			}}
		>
			<Stack.Screen
				name="AddPlace"
				component={AddPlace}
				options={{ headerTitle: "Add Place" }}
			/>
			<Stack.Screen
				name="AllPlaces"
				component={AllPlaces}
				options={{ headerTitle: "All Places" }}
			/>
		</Stack.Navigator>
	);
}
