import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalState } from "./components/GlobalState";
import HeaderPage from "./components/HeaderPage";
import Home from "./components/Home";
import Post from "./components/Post";

const App = () => {
	return (
		<GlobalState>
			<BrowserRouter>
				<HeaderPage />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<Post />} />
				</Routes>
			</BrowserRouter>
		</GlobalState>
	);
};

export default App;
