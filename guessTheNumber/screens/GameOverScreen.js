import { View, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function GameOverScreen({ setScreen }) {
  function handleRestart() {
    setScreen("startGame");
  }
  return (
    <View style={styles.page}>
      <View style={styles.buttonContainer}>
        <Button text={"Restart Game"} handlePress={handleRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
