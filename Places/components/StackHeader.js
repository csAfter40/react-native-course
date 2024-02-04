import { Appbar } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function StackHeader({ navigation, route, options, back }) {
	const stackNavigation = useNavigation();
	const screenButtons = {
		AddPlace: [],
		AllPlaces: ["plus"],
		PlaceDetail: [],
	};
	function onPlusPress() {
		stackNavigation.navigate("AddPlace");
	}
	return (
		<Appbar.Header mode="center-aligned" elevated={true}>
			{back && <Appbar.BackAction onPress={navigation.goBack} />}
			<Appbar.Content title={options.headerTitle} />
			{screenButtons[route.name].includes("plus") && (
				<Appbar.Action icon="plus" onPress={onPlusPress} />
			)}
		</Appbar.Header>
	);
}
