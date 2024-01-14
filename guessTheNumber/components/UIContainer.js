import { View, StyleSheet } from "react-native";
import React from "react";

export default function UIContainer({ children, style }) {
  return <View style={[styles.uiContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  uiContainer: {
    padding: 20,
    paddingVertical: 30,
    backgroundColor: "#E76F51",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: 300,
    borderRadius: 8,
    elevation: 6,
  },
});
