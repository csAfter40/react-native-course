import { StyleSheet, ImageBackground } from "react-native";
import PickNumberScreen from "./screens/PickNumberScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
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
        <PickNumberScreen />
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
