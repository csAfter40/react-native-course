import React from "react";
import { Appbar } from "react-native-paper";

export default function TopBar({ title, handlePressPlus }) {
	return (
		<Appbar.Header elevated={true} mode="center-aligned">
			<Appbar.Content title={title} />
			<Appbar.Action icon="plus" onPress={handlePressPlus} />
		</Appbar.Header>
	);
}
