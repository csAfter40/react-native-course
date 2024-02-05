import { View, StyleSheet } from "react-native";
import { TextInput, Button, HelperText, Text } from "react-native-paper";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ImagePicker from "./ImagePicker";

export default function PlaceForm({ place, onSubmit }) {
	const [image, setImage] = React.useState(null);

	const { handleSubmit, control, formState } = useForm({
		defaultValues: {
			title: place?.title || "",
			address: place?.address || "",
		},
		mode: "onSubmit",
	});

	function onSubmit(data) {
		if (formState.errors) {
			console.log(formState);
		}
		console.log(data);
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
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					mode="contained-tonal"
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.buttonText}>Confirm</Text>
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
	},
	buttonText: {
		fontSize: 15,
	},
	input: {
		width: "100%",
		marginTop: 20,
	},
});
