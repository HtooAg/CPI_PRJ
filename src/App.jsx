import React from "react";
import Header from "./components/Header";
import Event from "./components/Event";
import Footer from "./components/Footer";
import EventAgenda from "./components/EventAgenda";
import EventHighlights from "./components/EventHilights";
import EventSlider from "./components/EventSlider";

export default function App() {
	return (
		<div className="">
			<Header />
			<Event />
			<EventSlider/>
			<EventHighlights />
			<EventAgenda />
			<Footer />
		</div>
	);
}
