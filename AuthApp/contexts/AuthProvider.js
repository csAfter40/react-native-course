import React, { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = createContext();

function AuthProvider({ children }) {
	const [authToken, setAuthToken] = React.useState(null);
	function login(token) {
		setAuthToken(token);
		AsyncStorage.setItem("token", token);
	}
	function logout() {
		setAuthToken(null);
		AsyncStorage.removeItem("token");
	}
	const value = {
		token: authToken,
		isAuthenticated: !!authToken,
		login: login,
		logout: logout,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
