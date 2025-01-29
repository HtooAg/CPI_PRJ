import "../styles/variable.css";
import { BsCalendar2Week } from "react-icons/bs";
import { PiClockCountdownLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import header from "../assets/img/header.png";
import React, { useState } from "react";
import "../styles/variable.css";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="bg-cover bg-center p-8 text-white"
			style={{
				backgroundImage: `url(${header})`,
			}}
		>
			<nav>
				<div className="flex justify-between max-w-6xl mx-auto px-4 items-center">
					<div className=""></div>
					{/* Register Now Button (Desktop) */}

					<div className="flex items-center h-16">
						<div className="hidden md:block">
							<button className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase">
								Register Now
							</button>
						</div>

						<div className="xs:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none cursor-pointer"
								aria-label="Main menu"
							>
								{!isOpen ? (
									<RiMenu4Line
										className="text-2xl"
										color="white"
									/>
								) : (
									<RxCross1
										className="text-2xl"
										color="white"
									/>
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu (Collapsible) */}
				<div className={`xs:hidden ${isOpen ? "block" : "hidden"}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 text-white">
						<div className="text-center">
							{/* <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
							Register Now
						</button> */}
						</div>
						<a
							href="#overview"
							className="block px-3 py-2 hover:text-blue-600"
						>
							Overview
						</a>
						<a
							href="#highlights"
							className="block px-3 py-2 hover:text-blue-600"
						>
							Highlights
						</a>
						<a
							href="#agenda"
							className="block px-3 py-2 hover:text-blue-600"
						>
							Agenda
						</a>
						<a
							href="#register"
							className="block px-3 py-2  hover:text-blue-600"
						>
							Register
						</a>
					</div>
				</div>
			</nav>
			<div>
				{/* Header Section */}
				<header className="text-center mb-12">
					<h1
						className="text-7xl font-bold text-white mb-7"
						dir="rtl"
					>
						التعليم أولا
					</h1>
					<h2 className="text-4xl font-bold text-gray-200 mb-2">
						EDUCATION FIRST
					</h2>
					<p className="text-xl font-semibold text-gray-300 pt-10">
						FROM ASK TO ACTION
					</p>
				</header>
				<div className="md:hidden flex items-center">
					<button className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase">
						<p className="text-2xl">Register Now</p>
					</button>
				</div>
			</div>
			<div className="flex items-center flex-row justify-evenly mt-20">
				<div className="flex items-center gap-2">
					<BsCalendar2Week style={{ fontSize: 18 }} />
					<p>January 24, 2023</p>
				</div>
				<div className="flex items-center gap-2">
					<PiClockCountdownLight style={{ fontSize: 21 }} />
					<p>10:00 AM - 12:00 PM</p>
				</div>
				<div className="flex items-center gap-2">
					<IoLocationOutline style={{ fontSize: 21 }} />
					<p>Marina Hall, ADNEC</p>
				</div>
			</div>
		</div>
	);
}
