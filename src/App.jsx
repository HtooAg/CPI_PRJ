import React from "react";
import Header from "./components/Header";
import Event from "./components/Event";
import Footer from "./components/Footer";
import EventAgenda from "./components/EventAgenda";

export default function App() {
	return (
		<div className="">
			<Header />
      <Event/>
      <EventAgenda/>
      <Footer/>
		</div>
	);
}
