import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from "./navigators/MainStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<MainStack />
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
