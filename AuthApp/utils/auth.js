import { axiosAuthInstance } from "../axios";
import { FIREBASE_API_KEY } from "@env";

export async function authenticate(mode, email, password) {
	let path;
	if (mode === "signin") {
		path = `/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
	} else if (mode == "signup") {
		path = `/accounts:signUp?key=${FIREBASE_API_KEY}`;
	}
	const response = await axiosAuthInstance.post(path, {
		email: email,
		password: password,
		returnSecureToken: true,
	});
	return response;
}
