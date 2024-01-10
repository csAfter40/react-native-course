import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function InputModal({ addNewItem, showModal, setShowModal }) {
  const [itemText, setItemText] = React.useState("");
  function handlePress() {
    addNewItem(itemText);
    setItemText("");
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 }}>
        <View style={styles.modal}>
          <View style={styles.inputLine}>
            <TextInput
              style={styles.textInput}
              value={itemText}
              onChangeText={(newText) => setItemText(newText)}
              placeholder="Enter text..."
              placeholderTextColor="#6339CC"
            />
            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <Text style={styles.buttonText}>ADD ITEM</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{ ...styles.button, width: "100%" }}
          >
            <Text style={styles.buttonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputLine: {
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textInput: {
    color: "#6339CC",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    height: 40,
    flex: 1,
    marginRight: 6,
    paddingLeft: 8,
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
  modal: {
    backgroundColor: "#EFEEF6",
    height: 160,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 200,
    padding: 20,
    borderRadius: 12,
  },
});
