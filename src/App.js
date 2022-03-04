import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";

function App() {
	return (
		<>
			<div className='App'>
				<BrowserRouter>
					<Navbar />
					<Home />
					<Routes>
						<Route path='/' exact component={<Home />} />
						<Route path='/register' component={<Register />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
