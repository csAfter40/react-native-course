import { StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import UIContainer from "../components/UIContainer";
import Page from "../components/Page";
import Header from "../components/Header";

export default function GameOverScreen({
  setScreen,
  guessCount,
  pickedNumber,
  player,
}) {
  function handleRestart() {
    setScreen("startGame");
  }
  return (
		<Page>
			<UIContainer>
				<Header>{`${player} found`}</Header>
				<Header style={styles.bigText}>{pickedNumber}</Header>
				<Header style={styles.smallText}>{`in ${guessCount} guesses`}</Header>
				<Button text={"Restart Game"} handlePress={handleRestart} style={styles.button} />
			</UIContainer>
		</Page>
	);
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
  smallText: {
    fontSize: 20,
  },
  bigText: {
    fontSize: 40,
  },
});
