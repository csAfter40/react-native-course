import { Text } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import Page from "../components/Page";
import React from "react";
import PlaceForm from "../components/PlaceForm";

export default function AddPlace() {
	return (
		<Page>
			<ScrollView>
				<Text style={styles.title}>Add New Favourite Place</Text>
				<PlaceForm />
			</ScrollView>
		</Page>
	);
}

const styles = StyleSheet.create({
	page: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		marginBottom: 5,
		alignSelf: "center",
	},
});
