import { View, StyleSheet, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import UIContainer from "../components/UIContainer";
import Page from "../components/Page";
import Header from "../components/Header";

export default function StartGameScreen({
	setScreen,
	setPickedNumber,
	setGuessCount,
	setPlayer,
}) {
	React.useEffect(() => {
		setGuessCount(0);
	}, []);
	function handleUserGuess() {
		setScreen("userGame");
		setPlayer("You");
	}
	function handleCpuGuess() {
		setScreen("pickNumber");
		setPlayer("CPU");
	}
	return (
		<Page>
			<UIContainer>
				<Header>Select Game Mode</Header>
				<Button
					text={"I will guess the number"}
					handlePress={handleUserGuess}
					style={styles.button}
				/>
				<Button
					text={"Cpu guesses my number"}
					handlePress={handleCpuGuess}
					style={styles.button}
				/>
			</UIContainer>
		</Page>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
	},
});
