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
  const [screen, setScreen] = React.useState("pickNumber");
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
          <StartGameScreen />
        ) : screen === "pickNumber" ? (
          <PickNumberScreen
            handleNumberPick={handleNumberPick}
            setScreen={setScreen}
          />
        ) : screen === "cpuGame" ? (
          <CpuGameScreen />
        ) : screen === "userGame" ? (
          <UserGameScreen />
        ) : (
          <GameOverScreen setScreen={setScreen} />
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
