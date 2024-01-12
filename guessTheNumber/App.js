import { StyleSheet, View } from "react-native";
import PickNumberScreen from "./screens/PickNumberScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <PickNumberScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#264653",
  },
});
