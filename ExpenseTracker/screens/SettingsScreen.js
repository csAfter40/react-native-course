import React from "react";
import TopBar from "../components/TopBar";
import { SettingsContext } from "../context/SettingsProvider";
import Page from "../components/Page";
import { StyleSheet } from "react-native";
import SettingsItem from "../components/SettingsItem";
import CurrencySettingsItem from "../components/CurrencySettingsItem";

export default function SettingsScreen() {
	const { toggleDarkMode, darkMode } = React.useContext(SettingsContext);
	return (
		<>
			<TopBar title={"Settings"} hasPlus={false} />
			<Page style={styles.page}>
				<SettingsItem
					text="Dark Mode"
					onToggleSwitch={toggleDarkMode}
					isSwitchOn={darkMode}
				/>
				<CurrencySettingsItem />
			</Page>
		</>
	);
}

const styles = StyleSheet.create({
	page: {
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 20,
	},
});
