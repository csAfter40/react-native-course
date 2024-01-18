import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TextInput,
	Alert,
	useWindowDimensions,
} from "react-native";
import React from "react";
import Page from "../components/Page";
import UIContainer from "../components/UIContainer";
import Header from "../components/Header";
import Button from "../components/Button";
import GuessContainer from "../components/GuessContainer";
import { getRandomNumberBetween } from "../utils";
import { Colors } from "../utils";
import { Ionicons } from "@expo/vector-icons";

export default function UserGameScreen({
	pickedNumber,
	setPickedNumber,
	guessCount,
	setGuessCount,
	setScreen,
}) {
	const [text, setText] = React.useState("");
	const [guessList, setGuessList] = React.useState([]);
	const [guessedNumber, setGuessedNumber] = React.useState(null);
	const inputRef = React.useRef(null);
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
		const rndNumber = getRandomNumberBetween([1, 100]);
		setPickedNumber(rndNumber);
		inputRef.current.focus();
	}, []);

	function isValidInput() {
		let num;
		try {
			num = parseInt(text);
		} catch (error) {
			return false;
		}
		return num > 0 && num < 100;
	}

	function handleGameWon() {
		setScreen("gameOver");
	}

	function handleValidInput() {
		const guessedNumber = parseInt(text);
		setGuessedNumber(guessedNumber);
		setGuessList((prevList) => [guessedNumber, ...prevList]);
		setGuessCount((prevValue) => prevValue + 1);
		if (guessedNumber === pickedNumber) {
			handleGameWon();
		}
		setText("");
	}

	function handleInvalidInput() {
		setText("");
		Alert.alert("Invalid Number", "Please pick a number between 1-100", [
			{ text: "Ok", style: "destructive" },
		]);
	}
	function handleReset() {
		setText("");
	}

	function handleGuess() {
		isValidInput() ? handleValidInput() : handleInvalidInput();
	}
	return (
		<Page>
			<UIContainer style={[styles.uiContainer, responsiveStyles.uiContainer]}>
				<View style={[styles.inputContainer, responsiveStyles.inputContainer]}>
					<Header>Guess my number!</Header>
					<TextInput
						keyboardType="number-pad"
						maxLength={2}
						style={styles.input}
						onChangeText={setText}
						value={text}
						ref={inputRef}
					/>
					<View style={styles.buttonContainer}>
						<Button
							text="Reset"
							handlePress={handleReset}
							style={styles.button}
						/>
						<Button
							text="Guess"
							handlePress={handleGuess}
							style={styles.button}
						/>
					</View>
					{guessedNumber && (
						<View style={styles.resultTextContainer}>
							<Text style={styles.resultText}>
								You guessed{" "}
								<Text
									style={{ fontSize: 20, fontFamily: "inter-regular" }}
								>
									{guessedNumber}
								</Text>
							</Text>
							<Text style={styles.resultText}>
								This is{" "}
								<Text style={{ textDecorationLine: "underline" }}>
									{guessedNumber < pickedNumber ? "smaller" : "bigger"}
								</Text>{" "}
								than my number.
							</Text>
						</View>
					)}
				</View>

				<View style={[styles.guessesSection, responsiveStyles.guessesSection]}>
					{isLandscape && (
						<Header
							style={{ textAlign: "center", marginTop: 0, fontSize: 15 }}
						>
							Your guesses:
						</Header>
					)}
					<FlatList
						data={guessList}
						renderItem={({ item, index }) => (
							<GuessContainer
								text={`Guess #${guessCount - index}: ${item}`}
								icon={
									<Ionicons
										name={
											item > pickedNumber
												? "arrow-down-circle"
												: "arrow-up-circle"
										}
										size={20}
										color={Colors.menuBg}
										style={{ marginRight: 6 }}
										key={index}
									/>
								}
							/>
						)}
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
	input: {
		width: "100%",
		padding: 8,
		borderWidth: 1,
		borderColor: Colors.border,
		borderRadius: 100,
		color: Colors.primaryText,
		textAlign: "center",
		fontSize: 24,
		marginTop: 16,
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
	},
	button: {
		flex: 1,
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
	resultTextContainer: {
		width: "100%",
		alignItems: "center",
		paddingVertical: 20,
	},
	resultText: {
		fontSize: 14,
		fontFamily: "inter-light",
		color: Colors.primaryText,
	},
});
