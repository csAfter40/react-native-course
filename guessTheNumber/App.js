import { StyleSheet, View } from "react-native";
import PickNumberScreen from "./screens/PickNumberScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#6b7c84", "#264653"]}
      style={styles.rootContainer}
    >
      <PickNumberScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
