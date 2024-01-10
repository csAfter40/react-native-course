import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import InputModal from "./components/InputModal";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [items, setItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  function addNewItem(itemText) {
    if (itemText != "") {
      setItems((prevData) => [
        ...prevData,
        { text: itemText, key: Math.random().toString(), isDone: false },
      ]);
    }
  }
  function removeItem(key) {
    setItems((prevData) => prevData.filter((item) => item.key != key));
  }
  function toggleMarkAsDone(key) {
    setItems((prevData) => {
      return prevData.map((item) => {
        if (item.key === key) {
          const newItem = { ...item };
          newItem.isDone = !newItem.isDone;
          return newItem;
        } else {
          return item;
        }
      });
    });
  }
  return (
    <>
      <StatusBar style={"light"} />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={{ ...styles.button, width: "100%" }}
          >
            <Text style={styles.buttonText}>ADD ITEMS TO YOUR TODO LIST</Text>
          </TouchableOpacity>
          <InputModal
            showModal={showModal}
            addNewItem={addNewItem}
            setShowModal={setShowModal}
          />
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.h3}>List of things to do:</Text>
          <FlatList
            data={items}
            renderItem={(itemData) => (
              <ListItem
                removeItem={() => removeItem(itemData.item.key)}
                item={itemData.item}
                toggleMarkAsDone={() => toggleMarkAsDone(itemData.item.key)}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <TouchableOpacity onPress={() => setItems([])} style={styles.button}>
            <Text style={styles.buttonText}>RESET TODO LIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#966CFF",
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },
  inputContainer: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
    paddingBottom: 10,
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
    paddingLeft: 8,
  },
  h3: {
    color: "#eee",
    fontSize: 20,
    marginBottom: 10,
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
  },
});
