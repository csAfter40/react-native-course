import AuthContent from '../components/Auth/AuthContent';
import { authenticate } from "../utils/auth";
import React from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
	const [isAuthenticating, setIsAuthenticating] = React.useState(false);
	async function signupHandler(email, password) {
		setIsAuthenticating(true);
		try {
			const response = await authenticate("signup", email, password);
		} catch (error) {
			console.log(error);
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
