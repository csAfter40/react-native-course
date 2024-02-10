import Page from "../components/Page";
import React from "react";
import PlacesList from "../components/PlacesList";
import { getAllPlaces } from "../utils/database";
import { Alert } from "react-native";

export default function AllPlaces() {
	const [places, setPlaces] = React.useState([]);
	React.useEffect(() => {
		getAllPlaces()
			.then((res) => setPlaces(res))
			.catch((err) => {
				Alert.alert("Error getting data from database");
				console.log(err);
			});
	}, []);
	return (
		<Page>
			<PlacesList places={places} />
		</Page>
	);
}
