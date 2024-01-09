import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [items, setItems] = React.useState([])
  const [itemText, setItemText] = React.useState("")
  function handlePress() {
    if (itemText != "") {
      setItems(prevData => [...prevData, { text: itemText, key: Math.random().toString() }])
      setItemText("")
    }
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.h3}>Add items to your todo list.</Text>
        <View style={styles.inputLine}>
          <TextInput
            style={styles.textInput}
            value={itemText}
            onChangeText={newText => setItemText(newText)}
            placeholder='Enter text...'
            placeholderTextColor='#eee'
          />
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>ADD ITEM</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.h3}>List of things to do:</Text>
        <FlatList
          data={items}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>* {itemData.item.text}</Text>
              </View>
            )
          }}
        />
      </View>
      <View style={{ marginTop: 12 }}>
        <TouchableOpacity onPress={() => setItems([])} style={styles.button}>
          <Text style={styles.buttonText}>RESET TODO LIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#966CFF",
    flex: 1,
    padding: 20,
    paddingTop: 70
  },
  inputContainer: {

    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  inputLine: {
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  outputContainer: {
    paddingTop: 20,
    flex: 8,
  },
  textInput: {
    color: "#eee",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    height: 40,
    flex: 1,
    marginRight: 6,
    paddingLeft: 8
  },
  h3: {
    color: "#eee",
    fontSize: 20,
    marginBottom: 10
  },
  listItem: {
    backgroundColor: "#EFEEF6",
    borderRadius: 6,
    padding: 8,
    marginVertical: 4,
  },
  listItemText: {
    color: "#6339CC",
  },
  button: {
    backgroundColor: "#14D3BA",
    alignItems: "center",
    justifyContent: "center",
    color: "#eee",
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 6,
  },
  buttonText: {
    color: "#eee",
    fontSize: 15,
  }
});
