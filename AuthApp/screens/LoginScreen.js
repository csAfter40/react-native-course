import AuthContent from '../components/Auth/AuthContent';
import React from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { authenticate } from "../utils/auth";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/AuthProvider";

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = React.useState(false);
	const { login } = React.useContext(AuthContext);
	async function signinHandler(email, password) {
		setIsAuthenticating(true);
		try {
			const response = await authenticate("signin", email, password);
			login(response.data.idToken);
		} catch (error) {
			console.log(error);
			Alert.alert("Authentication failed", "Please check your credentials.");
		} finally {
			setIsAuthenticating(false);
		}
	}
	return isAuthenticating ? (
		<LoadingOverlay message="Logging in..." />
	) : (
		<AuthContent isLogin onAuthenticate={signinHandler} />
	);
}

export default LoginScreen;
