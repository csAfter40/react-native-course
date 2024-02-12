import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackHeader from "../components/StackHeader";
import AddPlace from "../screens/AddPlace";
import EditPlace from "../screens/EditPlace";
import AllPlaces from "../screens/AllPlaces";
import MapSelect from "../screens/MapSelect";
import PlaceDetail from "../screens/PlaceDetail";
import { SpinnerContext } from "../context/SpinnerProvider";
import GlobalSpinner from "../components/GlobalSpinner";

export default function MainStack() {
	const { spinnerVisible } = React.useContext(SpinnerContext);
	const Stack = createNativeStackNavigator();
	return (
		<>
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
					name="EditPlace"
					component={EditPlace}
					options={{ headerTitle: "Edit Place" }}
				/>
				<Stack.Screen
					name="AllPlaces"
					component={AllPlaces}
					options={{ headerTitle: "All Places" }}
				/>
				<Stack.Screen
					name="MapSelect"
					component={MapSelect}
					options={{ headerTitle: "Pick a Location" }}
				/>
				<Stack.Screen
					name="PlaceDetail"
					component={PlaceDetail}
					// options={{ headerTitle: "Pick a Location" }}
				/>
			</Stack.Navigator>
			{spinnerVisible && <GlobalSpinner />}
		</>
	);
}
