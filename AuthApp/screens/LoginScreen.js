import AuthContent from '../components/Auth/AuthContent';
import React from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { authenticate } from "../utils/auth";

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = React.useState(false);

	async function signinHandler(email, password) {
		setIsAuthenticating(true);
		try {
			const response = await authenticate("signin", email, password);
			console.log(response);
		} catch (error) {
			console.log(error);
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
