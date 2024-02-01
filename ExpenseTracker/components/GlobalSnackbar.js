import { Portal, Snackbar } from "react-native-paper";
import React from "react";
import { SnackContext } from "../context/SnackProvider";

export default function GlobalSnackbar() {
	const { snackText, snackVisible, onDismissSnackBar } = React.useContext(SnackContext);

	return (
		<Portal>
			<Snackbar
				visible={snackVisible}
				onDismiss={onDismissSnackBar}
				wrapperStyle={{ top: 70 }}
				duration={2000}
				onIconPress={onDismissSnackBar}
			>
				{snackText}
			</Snackbar>
		</Portal>
	);
}
