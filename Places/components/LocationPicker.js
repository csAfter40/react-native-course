import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Surface, Text, Button, Icon } from "react-native-paper";
import { useTheme } from "react-native-paper";
import * as Location from "expo-location";
import { getMapUri } from "../utils";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";

export default function LocationPicker({ location, setLocation }) {
	const theme = useTheme();
	const styles = StyleSheet.create({
		locationSectionContainer: {
			width: "100%",
			borderWidth: 1,
			borderColor: theme.colors.outline,
			borderRadius: 4,
			marginTop: 20,
			padding: 17,
		},
		mapContainer: {
			width: "100%",
			height: 180,
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
		},
		mapTitle: {
			color: theme.colors.onSurfaceVariant,
			marginBottom: 10,
		},
		map: {
			width: "100%",
			height: "100%",
		},
		mapButton: {
			flex: 1,
			marginTop: 10,
		},
		mapButtonContainer: {
			flexDirection: "row",
			gap: 10,
			marginVertical: 10,
		},
	});
	const navigation = useNavigation();
	const route = useRoute();
	const isFocused = useIsFocused();
	React.useEffect(() => {
		if (isFocused && route.params) {
			setLocation(route.params.location);
			route.params = null;
		}
	}, [route, isFocused]);
	React.useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
				return;
			}
		})();
	}, []);
	async function handleLocateUser() {
		try {
			const locationObj = await Location.getCurrentPositionAsync();
			const userLocation = {
				lat: locationObj.coords.latitude,
				lng: locationObj.coords.longitude,
			};
			setLocation(userLocation);
		} catch (error) {
			console.log(error);
		}
	}
	async function handlePickMap() {
		navigation.navigate("MapSelect");
	}
	return (
		<View style={styles.locationSectionContainer}>
			<Text variant="bodyLarge" style={styles.mapTitle}>
				Location
			</Text>
			<Surface mode="elevated" elevation={1} style={styles.mapContainer}>
				{location ? (
					<Image
						style={styles.map}
						source={{
							uri: getMapUri(location),
						}}
					/>
				) : (
					<Icon source="map-marker" color={theme.colors.primary} size={50} />
				)}
			</Surface>
			<View style={styles.mapButtonContainer}>
				<Button
					icon={"map-marker-account"}
					mode="outlined"
					style={styles.mapButton}
					onPress={handleLocateUser}
				>
					User Location
				</Button>
				<Button
					icon={"map"}
					mode="outlined"
					style={styles.mapButton}
					onPress={handlePickMap}
				>
					Pick on Map
				</Button>
			</View>
			{location && (
				<Button
					icon={"map-marker-remove"}
					mode="outlined"
					style={styles.mapButton}
					onPress={() => setLocation(null)}
				>
					Remove Location
				</Button>
			)}
		</View>
	);
}
