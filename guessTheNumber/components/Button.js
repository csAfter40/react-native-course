import { Text, StyleSheet, Pressable, View } from "react-native";
import React from "react";

export default function Button({ text, handlePress, color }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={{ ...styles.button, backgroundColor: color }}
        onPress={handlePress}
        android_ripple={{ color: "#793a2b" }}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E9C46A",
    overflow: "hidden",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
  },
  text: {
    color: "#fff",
  },
});
