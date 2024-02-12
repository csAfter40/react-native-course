import { ScrollView, View, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import Page from "../components/Page";
import { Button, Divider, Dialog, Portal, Text } from "react-native-paper";
import DetailItem from "../components/DetailItem";
import { useTheme } from "react-native-paper";
import { getPlaceById, deletePlace } from "../utils/database";
import { SpinnerContext } from "../context/SpinnerProvider";

export default function PlaceDetail({ navigation, route }) {
	const { startSpinner, stopSpinner } = React.useContext(SpinnerContext);
	const [visible, setVisible] = React.useState(false);
	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
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
		hideDialog();
		startSpinner();
		deletePlace(placeId)
			.then((res) => {
				navigation.replace("AllPlaces");
			})
			.catch((err) => {
				console.log(err);
				Alert.alert("Error deleting place.");
			})
			.finally(stopSpinner);
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
						onPress={showDialog}
					>
						Delete
					</Button>
					<Portal>
						<Dialog visible={visible} onDismiss={hideDialog}>
							<Dialog.Content>
								<Text variant="bodyMedium">
									Do you really want to delete this place from your
									places list?
								</Text>
							</Dialog.Content>
							<Dialog.Actions>
								<Button onPress={hideDialog}>Cancel</Button>
								<Button
									textColor={theme.colors.error}
									onPress={handleDeletePlace}
								>
									Delete
								</Button>
							</Dialog.Actions>
						</Dialog>
					</Portal>
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
