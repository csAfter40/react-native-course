import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Alert,
	useWindowDimensions,
} from "react-native";
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
	const { width, height } = useWindowDimensions();
	const isLandscape = width > height;
	const responsiveStyles = StyleSheet.create({
		uiContainer: {
			flexDirection: isLandscape ? "row" : "column",
			maxWidth: isLandscape ? "100%" : 400,
			alignItems: isLandscape ? "flex-start" : "center",
		},
		inputContainer: {
			flex: isLandscape ? 1 : 0,
		},
		guessesSection: {
			borderTopWidth: isLandscape ? 0 : 1,
			borderStartColor: isLandscape ? "white" : null,
			borderStartWidth: isLandscape ? 1 : 0,
			paddingHorizontal: isLandscape ? 10 : 0,
			paddingVertical: isLandscape ? 0 : 20,
		},
	});
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
			<UIContainer style={[styles.uiContainer, responsiveStyles.uiContainer]}>
				<View style={[styles.inputContainer, responsiveStyles.inputContainer]}>
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
				</View>
				<View style={[styles.guessesSection, responsiveStyles.guessesSection]}>
					{isLandscape && (
						<Header
							style={{
								textAlign: "center",
								marginTop: 0,
								fontSize: 15,
								marginBottom: 10,
							}}
						>
							CPU guesses:
						</Header>
					)}
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
	inputContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
	},
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
		gap: 10,
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
