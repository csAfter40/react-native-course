import React, { createContext } from "react";

const DataContext = createContext();

function DataProvider(props) {
	const [favourites, setFavourites] = React.useState(new Set());
	function removeFromFavourites(itemId) {
		setFavourites((prevValues) => {
			const newValues = new Set(prevValues);
			newValues.delete(itemId);
			return newValues;
		});
	}
	function addToFavourites(itemId) {
		setFavourites((prevValues) => new Set(prevValues).add(itemId));
	}
	return (
		<DataContext.Provider
			value={{
				favourites,
				removeFromFavourites,
				addToFavourites,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataProvider, DataContext };
