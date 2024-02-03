import React from "react";
import FlatButton from "./ui/FlatButton";
import { AuthContext } from "../contexts/AuthProvider";

export default function LogoutButton() {
	const { logout } = React.useContext(AuthContext);
	function handleLogout() {
		logout();
	}
	return <FlatButton onPress={handleLogout}>logout</FlatButton>;
}
