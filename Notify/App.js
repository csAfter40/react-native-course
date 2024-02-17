import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import * as Notificatons from "expo-notifications";
import React from "react";
import Constants from "expo-constants";

Notificatons.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
	const [pushToken, setPushToken] = React.useState(null);
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
	function schedulePushNotificationHandler() {
		fetch("https://exp.host/--/api/v2/push/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				to: pushToken,
				title: "hello",
				body: "world",
			}),
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
	React.useEffect(() => {
		async function configurePushNotifications() {
			const { status: existingStatus } = await Notificatons.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== "granted") {
				const { status } = await Notificatons.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== "granted") {
				Alert.alert("Failed to get push token for push notification!");
				return false;
			}
			const pushTokenData = await Notificatons.getExpoPushTokenAsync({
				projectId: Constants.expoConfig.extra.eas.projectId,
			});
			setPushToken(pushTokenData.data);
			if (Platform.OS === "android") {
				Notificatons.setNotificationChannelAsync("default", {
					name: "default",
					importance: Notificatons.AndroidImportance.HIGH,
				});
			}
		}
		configurePushNotifications();
	}, []);
	return (
		<View style={styles.container}>
			<Button onPress={scheduleNotificationHandler} title="Schedule Notification" />
			{pushToken && (
				<Button
					onPress={schedulePushNotificationHandler}
					title="Schedule Push Notification"
				/>
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		gap: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
