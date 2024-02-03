import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { axiosDbInstance } from "../axios";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/AuthProvider";

function WelcomeScreen() {
  const { token } = React.useContext(AuthContext);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
		token &&
			axiosDbInstance
				.get(`/message.json?auth=${token}`)
				.then((response) => setMessage(response.data))
				.catch((error) => Alert.alert("Unable to fetch message"));
  }, [token]);
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.title}>Welcome!</Text>
			<Text>You authenticated successfully!</Text>
			<Text style={{ marginTop: 20, fontWeight: "600", fontSize: 16 }}>
				Your message:
			</Text>
			<Text>{message}</Text>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
