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
        <Header text={`${player} found`} />
        <Header text={pickedNumber} style={styles.bigText} />
        <Header text={`in ${guessCount} guesses`} style={styles.smallText} />
        <Button
          text={"Restart Game"}
          handlePress={handleRestart}
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
  smallText: {
    fontSize: 20,
  },
  bigText: {
    fontSize: 40,
  },
});
