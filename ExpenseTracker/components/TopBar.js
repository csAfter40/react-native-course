import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import AddExpenseModal from "./AddExpenseModal";

export default function TopBar({
	title,
	navigation,
	route,
	options,
	back,
	hasPlus = true,
	category = null,
}) {
	const barTitle = title || getHeaderTitle(options, route.name);
	const [visible, setVisible] = React.useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	return (
		<>
			<Appbar.Header elevated={true} mode="center-aligned">
				{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
				<Appbar.Content title={barTitle} />
				{hasPlus && <Appbar.Action icon="plus" onPress={showModal} />}
			</Appbar.Header>
			<AddExpenseModal
				visible={visible}
				hideModal={hideModal}
				category={category}
			/>
		</>
	);
}
