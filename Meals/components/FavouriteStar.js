import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavouriteStar({ isFavourite, onPress }) {
	return (
		<Pressable onPress={onPress}>
			<Ionicons
				name={isFavourite ? "star" : "star-outline"}
				size={20}
				color="black"
			/>
		</Pressable>
	);
}
