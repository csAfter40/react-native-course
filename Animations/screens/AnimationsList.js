import { FlatList } from "react-native";
import React from "react";
import Page from "../components/Page";
import { animationList } from "../animations";
import AnimationCard from "../components/AnimationCard";

export default function AnimationsList() {
	return (
		<Page>
			<FlatList
				data={animationList}
				renderItem={({ item }) => <AnimationCard animation={item} />}
				keyExtractor={(item) => item.screenId}
			/>
		</Page>
	);
}
