import { StyleSheet, Alert } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import * as Location from "expo-location";

export default function MapSelect() {
	React.useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
				return;
			}
		})();
	}, []);
	const [pickedLocation, setPickedLocation] = React.useState(null);
	const initialRegion = {
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};
	const [region, setRegion] = React.useState(initialRegion);
	const navigation = useNavigation();
	function handlePress(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;
		setPickedLocation({ lat: lat, lng: lng });
	}
	function handleSave() {
		if (pickedLocation) {
			navigation.navigate("AddPlace", { location: pickedLocation });
		} else {
			Alert.alert("Location missing.", "You need to pick a location.");
		}
	}
	return (
		<>
			<MapView
				style={styles.container}
				region={region}
				// onRegionChange={setRegion}
				onPress={handlePress}
				showsMyLocationButton={true}
				showsUserLocation
				showsCompass={true}
			>
				{pickedLocation && (
					<Marker
						coordinate={{
							latitude: pickedLocation.lat,
							longitude: pickedLocation.lng,
						}}
					/>
				)}
			</MapView>
			<FAB
				visible={!!pickedLocation}
				icon="content-save"
				style={styles.saveFab}
				size="medium"
				onPress={handleSave}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	saveFab: {
		position: "absolute",
		margin: 20,
		right: 0,
		bottom: 20,
	},
});
