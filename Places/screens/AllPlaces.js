import Page from "../components/Page";
import React from "react";
import PlacesList from "../components/PlacesList";
import { getAllPlaces } from "../utils/database";
import { Alert } from "react-native";
import { SpinnerContext } from "../context/SpinnerProvider";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces() {
	const { startSpinner, stopSpinner } = React.useContext(SpinnerContext);
	const [places, setPlaces] = React.useState([]);
	const isFocused = useIsFocused();
	function updatePlaces() {
		startSpinner();
		getAllPlaces()
			.then((res) => setPlaces(res))
			.catch((err) => {
				Alert.alert("Error getting data from database");
				console.log(err);
			})
			.finally(stopSpinner);
	}
	React.useEffect(() => {
		isFocused && updatePlaces();
	}, [isFocused]);
	return (
		<Page>
			<PlacesList places={places} />
		</Page>
	);
}
