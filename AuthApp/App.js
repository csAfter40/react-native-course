import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, AuthContext } from "./contexts/AuthProvider";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import LogoutButton from "./components/LogoutButton";

const Stack = createNativeStackNavigator();

function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: "white",
				contentStyle: { backgroundColor: Colors.primary100 },
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	);
}

function AuthenticatedStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: "white",
				contentStyle: { backgroundColor: Colors.primary100 },
				headerRight: () => <LogoutButton />,
			}}
		>
			<Stack.Screen name="Welcome" component={WelcomeScreen} />
		</Stack.Navigator>
	);
}

function Navigation() {
	const { isAuthenticated } = React.useContext(AuthContext);
	return (
		<NavigationContainer>
			{isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
		</NavigationContainer>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<AuthProvider>
				<Navigation />
			</AuthProvider>
		</>
	);
}
