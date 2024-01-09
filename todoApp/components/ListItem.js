import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListItem({ item }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>* {item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#EFEEF6",
        borderRadius: 6,
        padding: 8,
        marginVertical: 4,
    },
    listItemText: {
        color: "#6339CC",
    },
})