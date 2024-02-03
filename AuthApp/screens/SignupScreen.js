import AuthContent from '../components/Auth/AuthContent';
import { authenticate } from "../utils/auth";
import React from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/AuthProvider";

function SignupScreen() {
	const { login } = React.useContext(AuthContext);
	const [isAuthenticating, setIsAuthenticating] = React.useState(false);
	async function signupHandler(email, password) {
		setIsAuthenticating(true);
		try {
			const response = await authenticate("signup", email, password);
			login(response.data.idToken);
		} catch (error) {
			Alert.alert("Authentication failed", "Please check your credentials.");
		} finally {
			setIsAuthenticating(false);
		}
	}
	return isAuthenticating ? (
		<LoadingOverlay message="Creating user..." />
	) : (
		<AuthContent onAuthenticate={signupHandler} />
	);
}

export default SignupScreen;
