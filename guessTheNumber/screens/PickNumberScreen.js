import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function PickNumberScreen({ handleNumberPick, setScreen }) {
  const [text, setText] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(true);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  function blinkHeader() {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 6) {
        clearInterval(interval);
      } else {
        setIsVisible((prevValue) => !prevValue);
        count++;
      }
    }, 100);
  }

  function handleReset() {
    setText("");
  }
  function handleStart() {
    if (isValidInput()) {
      handleNumberPick(parseInt(text));
      setScreen("cpuGame");
    } else if (text === "") {
      blinkHeader();
    } else {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99.", [
        { text: "Ok", style: "destructive" },
      ]);
      handleReset();
    }
  }
  function handleBack() {
    setScreen("startGame");
  }
  function isValidInput() {
    let num;
    try {
      num = parseInt(text);
    } catch (error) {
      return false;
    }
    return num > 0 && num < 100;
  }
  return (
    <View style={styles.page}>
      <View style={styles.inputContainer}>
        <Text style={[styles.header, { opacity: isVisible ? 1 : 0 }]}>
          Pick your number
        </Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
          onChangeText={setText}
          value={text}
          ref={inputRef}
        />
        <View style={styles.buttonContainer}>
          <Button
            text="Reset"
            handlePress={handleReset}
            style={styles.button}
          />
          <Button
            text="Start"
            handlePress={handleStart}
            style={styles.button}
          />
        </View>
        <Button
          text={"Back to main menu"}
          handlePress={handleBack}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 160,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    padding: 20,
    paddingVertical: 30,
    backgroundColor: "#E76F51",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 300,
    borderRadius: 8,
    elevation: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#E9C46A",
    borderRadius: 100,
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 12,
  },
  button: {
    flex: 1,
  },
});
