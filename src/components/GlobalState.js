import React, { useState, useEffect, createContext } from "react";

export const StateContext = createContext();

export const GlobalState = ({ children }) => {
	const [viewItems, setViewItems] = useState([]);

	return (
		<StateContext.Provider value={{ mgs: "Peter", viewItems, setViewItems }}>
			{children}
		</StateContext.Provider>
	);
};
