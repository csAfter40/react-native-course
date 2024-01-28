import { Surface, Text, Menu, Button } from "react-native-paper";
import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SettingsContext } from "../context/SettingsProvider";
import { CURRENCIES } from "../data/dummy-data";

export default function CurrencySettingsItem() {
	const [visible, setVisible] = React.useState(false);
	function openMenu() {
		setVisible(true);
	}
	function closeMenu() {
		setVisible(false);
	}
	const { userCurrency, setUserCurrency } = React.useContext(SettingsContext);
	return (
		<Pressable onPress={openMenu}>
			<Surface style={styles.container}>
				<Text style={styles.text}>Default Currency</Text>
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={<Text style={styles.text}>{userCurrency}</Text>}
					anchorPosition="bottom"
					style={{ alignSelf: "center" }}
				>
					{CURRENCIES.map((currency) => {
						return (
							<Menu.Item
								key={currency}
								onPress={() => {
									setUserCurrency(currency);
									closeMenu();
								}}
								title={currency}
							/>
						);
					})}
				</Menu>
			</Surface>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 30,
		height: 60,
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 16,
	},
});
