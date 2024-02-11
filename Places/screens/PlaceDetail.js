import { ScrollView, View, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import Page from "../components/Page";
import { Button, Divider } from "react-native-paper";
import DetailItem from "../components/DetailItem";
import { useTheme } from "react-native-paper";
import { getPlaceById } from "../utils/database";
import { SpinnerContext } from "../context/SpinnerProvider";

export default function PlaceDetail({ navigation, route }) {
	const { startSpinner, stopSpinner } = React.useContext(SpinnerContext);
	const [place, setPlace] = React.useState(null);
	const theme = useTheme();
	const placeId = route.params.placeId;
	React.useEffect(() => {
		startSpinner();
		getPlaceById(placeId)
			.then((res) => {
				setPlace(res);
			})
			.catch((err) => {
				Alert.alert("Error getting place data.");
			})
			.finally(stopSpinner);
	}, []);
	React.useEffect(() => {
		if (place) {
			navigation.setOptions({ headerTitle: place.title });
		}
	}, [place]);

	function handleEditPlace() {
		console.log("edit place");
	}
	function handleDeletePlace() {
		console.log("delete place");
	}
	if (!place) {
		return null;
	}
	return (
		<Page style={{ paddingBottom: 40, flex: 1 }}>
			<ScrollView style={styles.mainContainer}>
				<Image style={styles.image} source={{ uri: place.imageUri }} />
				<DetailItem title="Title" text={place.title} />
				<Divider />
				<DetailItem title="Address" text={place.address} />
				<Divider />
				<View style={styles.buttonContainer}>
					<Button
						onPress={handleEditPlace}
						mode="outlined"
						style={styles.button}
						icon={"pencil"}
					>
						Edit
					</Button>
					<Button
						mode="outlined"
						style={styles.button}
						textColor={theme.colors.error}
						icon={"trash-can-outline"}
						onPress={handleDeletePlace}
					>
						Delete
					</Button>
				</View>
			</ScrollView>
		</Page>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 8,
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 10,
		marginVertical: 20,
	},
	button: {
		flex: 1,
	},
});
