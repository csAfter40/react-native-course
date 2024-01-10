import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ListItem({ item, removeItem, toggleMarkAsDone }) {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 8 }} onPress={toggleMarkAsDone}>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u2022 "}</Text>
          <Text style={[styles.listItemText, item.isDone && styles.isDone]}>
            {item.text}
          </Text>
        </View>
      </Pressable>
      <Pressable style={{ flex: 1 }} onPress={removeItem}>
        <View style={{ ...styles.listItem, justifyContent: "center" }}>
          <Text style={styles.listItemText}>X</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "#EFEEF6",
    borderRadius: 6,
    padding: 8,
    marginVertical: 4,
    flexDirection: "row",
    height: 40,
  },
  bullet: {
    fontSize: 18,
    paddingHorizontal: 5,
  },
  listItemText: {
    color: "#6339CC",
  },
  isDone: {
    textDecorationLine: "line-through",
  },
});
