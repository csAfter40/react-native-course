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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
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

function Root() {
	const { login } = React.useContext(AuthContext);
	React.useEffect(() => {
		async function getToken() {
			const storedToken = await AsyncStorage.getItem("token");
			if (storedToken) {
				login(storedToken);
			}
			SplashScreen.hideAsync();
		}
		getToken();
	}, []);
	return <Navigation />;
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<AuthProvider>
				<Root />
			</AuthProvider>
		</>
	);
}
