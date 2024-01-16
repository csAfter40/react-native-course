import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import PickNumberScreen from "./screens/PickNumberScreen";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import CpuGameScreen from "./screens/CpuGameScreen";
import UserGameScreen from "./screens/UserGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = React.useState(null);
  const [screen, setScreen] = React.useState("startGame");
  const [guessCount, setGuessCount] = React.useState(0);
  const [player, setPlayer] = React.useState(null);
  function handleNumberPick(number) {
    setPickedNumber(number);
  }
  return (
    <LinearGradient
      colors={["#6b7c84", "#264653"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/bgImage.jpg")}
        style={styles.rootContainer}
        imageStyle={styles.bgImage}
        resizeMode="cover"
      >
        {screen === "startGame" ? (
          <StartGameScreen
            setScreen={setScreen}
            setPickedNumber={setPickedNumber}
            setGuessCount={setGuessCount}
            setPlayer={setPlayer}
          />
        ) : screen === "pickNumber" ? (
          <PickNumberScreen
            handleNumberPick={handleNumberPick}
            setScreen={setScreen}
          />
        ) : screen === "cpuGame" ? (
          <CpuGameScreen
            pickedNumber={pickedNumber}
            guessCount={guessCount}
            setGuessCount={setGuessCount}
            setScreen={setScreen}
          />
        ) : screen === "userGame" ? (
          <UserGameScreen
            pickedNumber={pickedNumber}
            guessCount={guessCount}
            setGuessCount={setGuessCount}
          />
        ) : (
          <GameOverScreen
            setScreen={setScreen}
            guessCount={guessCount}
            pickedNumber={pickedNumber}
            player={player}
          />
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.1,
  },
});
