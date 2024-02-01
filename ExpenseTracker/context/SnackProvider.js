import React, { createContext } from "react";

const SnackContext = createContext();

function SnackProvider(props) {
	const [snackVisible, setSnackVisible] = React.useState(false);
	const [snackText, setSnackText] = React.useState("");
	function snack(text) {
		setSnackText(text);
		setSnackVisible(true);
	}
	function onDismissSnackBar() {
		setSnackVisible(false);
	}
	return (
		<SnackContext.Provider
			value={{
				snackVisible,
				snack,
				onDismissSnackBar,
				snackText,
			}}
		>
			{props.children}
		</SnackContext.Provider>
	);
}

export { SnackProvider, SnackContext };
