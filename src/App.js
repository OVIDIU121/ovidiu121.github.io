import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import SelectionSort from "./pages/selectionsort";
import QuickSort from "./pages/quicksort";
import MergeSort from "./pages/mergesort";
import BubbleSort from "./pages/bubblesort";
import GamesPage from "./pages/games";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/selectionsort" element={<SelectionSort />} />
				<Route path="/quicksort" element={<QuickSort />} />
				<Route path="/mergesort" element={<MergeSort />} />
				<Route path="/bubblesort" element={<BubbleSort />} />
				<Route path="/games" element={<GamesPage />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
