import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notificatons from "expo-notifications";

Notificatons.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
	function scheduleNotificationHandler() {
		Notificatons.scheduleNotificationAsync({
			content: {
				title: "Here comes a notification",
				body: "This is great!",
				data: { userName: "Max" },
			},
			trigger: {
				seconds: 5,
			},
		});
	}
	return (
		<View style={styles.container}>
			<Button onPress={scheduleNotificationHandler} title="Schedule Notification" />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
