import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Surface, Text, Button, Icon } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { launchCameraAsync } from "expo-image-picker";

export default function ImagePicker({ image, setImage }) {
	const theme = useTheme();
	const styles = StyleSheet.create({
		imageSectionContainer: {
			width: "100%",
			borderWidth: 1,
			borderColor: theme.colors.outline,
			borderRadius: 4,
			marginTop: 20,
			padding: 17,
		},
		imageContainer: {
			width: "100%",
			height: 180,
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
		},
		imageTitle: {
			color: theme.colors.onSurfaceVariant,
			marginBottom: 10,
		},
		image: {
			width: "100%",
			height: "100%",
		},
		imageButton: {
			flex: 1,
			marginTop: 10,
		},
		imageButtonContainer: {
			flexDirection: "row",
			gap: 10,
			marginVertical: 10,
		},
	});
	async function handleCameraStart() {
		const picture = await launchCameraAsync();
		if (!picture.canceled) {
			setImage(picture.assets[0]);
		}
	}
	return (
		<View style={styles.imageSectionContainer}>
			<Text variant="bodyLarge" style={styles.imageTitle}>
				Image
			</Text>
			<Surface mode="elevated" elevation={1} style={styles.imageContainer}>
				{image ? (
					<Image
						resizeMode="cover"
						style={styles.image}
						source={{ uri: image.uri }}
					/>
				) : (
					<Icon source="image" color={theme.colors.primary} size={50} />
				)}
			</Surface>
			<View style={styles.imageButtonContainer}>
				<Button
					icon={"camera"}
					mode="outlined"
					style={styles.imageButton}
					onPress={handleCameraStart}
				>
					Take Picture
				</Button>
				{image && (
					<Button
						icon={"image-remove"}
						mode="outlined"
						style={styles.imageButton}
						onPress={() => setImage(null)}
					>
						Remove Image
					</Button>
				)}
			</View>
		</View>
	);
}
