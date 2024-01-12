import { Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

export default function Button({ text, handlePress, color }) {
  return (
    <TouchableHighlight
      style={{ ...styles.button, backgroundColor: color }}
      onPress={handlePress}
      activeOpacity={1}
      underlayColor="#F4A261"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: 40,
    borderColor: "#E9C46A",
    borderWidth: 1,
    borderRadius: 100,
    flex: 1,
  },
  text: {
    color: "#fff",
  },
});
