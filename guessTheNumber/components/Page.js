import { View, StyleSheet } from "react-native";
import React from "react";

export default function Page({ children, style }) {
  return <View style={[styles.page, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 160,
    alignItems: "center",
    gap: 12,
  },
});
