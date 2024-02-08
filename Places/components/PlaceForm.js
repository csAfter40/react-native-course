import { View, StyleSheet } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Place from "../models/place";
import { insertPlace } from "../utils/database";
import { useNavigation } from "@react-navigation/native";

export default function PlaceForm({ place, onSubmit }) {
	const [image, setImage] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	const { handleSubmit, control, formState, setValue } = useForm({
		defaultValues: {
			title: place?.title || "",
			address: place?.address || "",
		},
		mode: "onSubmit",
	});
	const navigation = useNavigation();

	async function onSubmit(data) {
		const place = new Place(
			data.title,
			image.uri,
			data.address,
			location.lat,
			location.lng
		);
		await insertPlace(place);
		navigation.replace("AllPlaces");
	}
	function handleSetAsAddress(addressFromLocation) {
		setValue("address", addressFromLocation);
	}
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Controller
					control={control}
					rules={{
						required: { value: true, message: "This field is required" },
					}}
					name="title"
					render={({ field }) => (
						<TextInput
							label="Title"
							value={field.value}
							onChangeText={field.onChange}
							style={styles.input}
							mode="outlined"
							error={!!formState.errors.title}
						/>
					)}
				/>
				{formState.errors.title && (
					<HelperText type="error">{formState.errors.title.message}</HelperText>
				)}
				<Controller
					control={control}
					name="address"
					render={({ field }) => (
						<TextInput
							label="Address"
							value={field.value}
							onChangeText={field.onChange}
							style={styles.input}
							mode="outlined"
							multiline={true}
							numberOfLines={3}
						/>
					)}
				/>
			</View>
			<ImagePicker image={image} setImage={setImage} />
			<LocationPicker
				location={location}
				setLocation={setLocation}
				handleSetAsAddress={handleSetAsAddress}
			/>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					mode="contained"
					onPress={handleSubmit(onSubmit)}
				>
					Save Place
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	inputContainer: {
		width: "100%",
	},
	buttonContainer: {
		width: "100%",
		flexDirection: "row",
	},
	button: {
		flex: 1,
		justifyContent: "center",
		marginVertical: 20,
		marginBottom: 40,
	},
	buttonText: {
		fontSize: 15,
	},
	input: {
		width: "100%",
		marginTop: 12,
	},
});
