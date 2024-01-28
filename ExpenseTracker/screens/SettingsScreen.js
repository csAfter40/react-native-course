import React from "react";
import TopBar from "../components/TopBar";
import { SettingsContext } from "../context/SettingsProvider";
import Page from "../components/Page";
import { StyleSheet } from "react-native";
import SettingsItem from "../components/SettingsItem";

export default function SettingsScreen() {
	const { toggleDarkMode, darkMode } = React.useContext(SettingsContext);
	return (
		<>
			<TopBar title={"Settings"} />
			<Page style={styles.page}>
				<SettingsItem
					text="Dark Mode"
					onToggleSwitch={toggleDarkMode}
					isSwitchOn={darkMode}
				/>
			</Page>
		</>
	);
}

const styles = StyleSheet.create({
	page: {
		justifyContent: "flex-start",
		alignItems: "center",
	},
});
