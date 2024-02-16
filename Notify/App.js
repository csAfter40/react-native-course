import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notificatons from "expo-notifications";
import React from "react";

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
	React.useEffect(() => {
		const subscription1 = Notificatons.addNotificationReceivedListener(
			(notification) => {
				console.log("notification received");
				console.log(notification.request.content.data);
			}
		);
		const subscription2 = Notificatons.addNotificationResponseReceivedListener(
			(response) => {
				console.log("notification response received");
				console.log(response);
			}
		);
		return () => {
			subscription1.remove();
			subscription2.remove();
		};
	}, []);
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
