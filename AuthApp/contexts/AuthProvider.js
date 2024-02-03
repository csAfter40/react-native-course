import React, { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [authToken, setAuthToken] = React.useState(null);
	function login(token) {
		setAuthToken(token);
	}
	function logout() {
		setAuthToken(null);
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
