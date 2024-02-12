import { Text } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import Page from "../components/Page";
import React from "react";
import PlaceForm from "../components/PlaceForm";

export default function EditPlace({ route }) {
	place = route.params.place;

	return (
		<Page>
			<ScrollView>
				<PlaceForm place={place} />
			</ScrollView>
		</Page>
	);
}
