import { Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ text, style }) {
  return <Text style={[styles.header, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 12,
  },
});
