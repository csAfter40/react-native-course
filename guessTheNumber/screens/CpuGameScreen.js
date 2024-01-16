import React from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Page from "../components/Page";
import UIContainer from "../components/UIContainer";
import Header from "../components/Header";
import Button from "../components/Button";
import GuessContainer from "../components/GuessContainer";
import { getRandomNumberBetween, Colors } from "../utils";
import { Ionicons } from "@expo/vector-icons";

export default function CpuGameScreen({
	pickedNumber,
	setGuessCount,
	guessCount,
	setScreen,
}) {
	const [guess, setGuess] = React.useState(null);
	const [guessLimits, setGuesLimits] = React.useState([1, 99]);
	const [guessList, setGuessList] = React.useState([]);
	React.useEffect(() => {
		const newGuess = getRandomNumberBetween(guessLimits);
		setGuessCount((prevValue) => prevValue + 1);
		if (newGuess === pickedNumber) {
			handleGameWon();
		} else {
			handleIncorrectGuess(newGuess);
		}
	}, [guessLimits]);
	function handleGameWon() {
		setScreen("gameOver");
	}
	function handleIncorrectGuess(newGuess) {
		setGuess(newGuess);
		appendNewGuess(newGuess);
	}
	function appendNewGuess(newGuess) {
		setGuessList((prevValue) => [newGuess, ...prevValue]);
	}
	function handleIncorrectFeedback() {
		Alert.alert("Invalid Feedback", `Your number was ${pickedNumber}`, [
			{ text: "Ok", style: "destructive" },
		]);
	}
	function handleBigger() {
		if (guess < pickedNumber) {
			setGuesLimits((prevLimits) => [guess + 1, prevLimits[1]]);
		} else {
			handleIncorrectFeedback();
		}
	}
	function handleSmaller() {
		if (guess > pickedNumber) {
			setGuesLimits((prevLimits) => [prevLimits[0], guess - 1]);
		} else {
			handleIncorrectFeedback();
		}
	}
	return (
		<Page>
			<UIContainer style={styles.uiContainer}>
				<Header>Oponent's guess</Header>
				<Text style={styles.guessText}>{guess || ""}</Text>
				<View style={styles.buttonContainer}>
					<Button
						text="Smaller"
						style={styles.button}
						handlePress={handleSmaller}
						icon={
							<Ionicons
								name="arrow-down-circle"
								size={20}
								color={Colors.primaryText}
								style={{ marginRight: 6 }}
							/>
						}
					/>
					<Button
						text="Bigger"
						style={styles.button}
						handlePress={handleBigger}
						icon={
							<Ionicons
								name="arrow-up-circle"
								size={20}
								color={Colors.primaryText}
								style={{ marginRight: 6 }}
							/>
						}
					/>
				</View>
				<View style={styles.guessesSection}>
					<FlatList
						data={guessList}
						renderItem={({ item, index }) => (
							<GuessContainer
								text={`Guess #${guessCount - index}: ${item}`}
							/>
						)}
						keyExtractor={(item) => item}
						ItemSeparatorComponent={() => (
							<View style={styles.seperator}></View>
						)}
					/>
				</View>
			</UIContainer>
		</Page>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		gap: 12,
		paddingVertical: 10,
	},
	uiContainer: {
		flex: 1,
		marginBottom: 25,
		justifyContent: "flex-start",
		paddingBottom: 10,
		gap: 0,
	},
	button: {
		flex: 1,
	},
	guessText: {
		fontFamily: "inter-regular",
		color: Colors.primaryText,
		fontSize: 34,
	},
	guessesSection: {
		borderTopColor: "white",
		borderTopWidth: 1,
		width: "100%",
		paddingVertical: 20,
		justifyContent: "flex-start",
		flex: 1,
	},
	seperator: {
		height: 10,
	},
});
