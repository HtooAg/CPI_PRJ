"use client";

import { useState } from "react";
import "../styles/navbar.css";
import header from "../assets/img/header.png";
import { BsCalendar2Week } from "react-icons/bs";
import { PiClockCountdownLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.div
			id="header"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="bg-cover bg-center p-8 text-white h-190"
			style={{
				backgroundImage: `url(${header})`,
			}}
		>
			<nav className="fixed top-1 z-100 right-20">
				<div className="flex justify-between max-w-6xl mx-auto px-4 items-center">
					<div className=""></div>
					<div className="flex items-center h-16">
						<div className="hidden md:block">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase mr-5"
							>
								Register Now
							</motion.button>
						</div>
						<div>
							<button
								onClick={toggleMenu}
								className="p-2 rounded-md text-white focus:outline-none cursor-pointer"
								aria-label="Main menu"
							>
								<div
									className={`hamburger-menu ${
										isOpen ? "open" : ""
									}`}
								>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu (Collapsible) */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute top-full left-0 right-0 primary-background bg-opacity-50"
						>
							<div className="px-2 pt-2 pb-3 space-y-1 text-white cursor-pointer">
								<motion.a
									onClick={() => scrollToSection("header")}
									whileHover={{ x: 10 }}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Home
								</motion.a>
								<motion.a
									onClick={() => scrollToSection("event")}
									whileHover={{ x: 10 }}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Overview
								</motion.a>
								<motion.a
									whileHover={{ x: 10 }}
									onClick={() => scrollToSection("slider")}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Last Event
								</motion.a>
								<motion.a
									onClick={() => scrollToSection("hilight")}
									whileHover={{ x: 10 }}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Highlights
								</motion.a>

								<motion.a
									whileHover={{ x: 10 }}
									onClick={() =>
										scrollToSection("event_agenda")
									}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Agenda
								</motion.a>
								<motion.a
									whileHover={{ x: 10 }}
									onClick={() => scrollToSection("footer")}
									className="block px-3 py-2 hover:text-blue-600"
								>
									Register
								</motion.a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				{/* Header Section */}
				<header className="text-center mb-12">
					<motion.h1
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="text-7xl font-bold text-white mt-20 mb-7"
						dir="rtl"
					>
						التعليم أولا
					</motion.h1>
					<motion.h2
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="text-4xl font-bold text-gray-200 mb-2"
					>
						EDUCATION FIRST
					</motion.h2>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="text-xl font-semibold text-gray-300 pt-10"
					>
						FROM ASK TO ACTION
					</motion.p>
				</header>
				<div className="md:hidden flex items-center justify-center">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase"
					>
						<p className="text-sm">Register Now</p>
					</motion.button>
				</div>
			</motion.div>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="flex items-center flex-row justify-evenly mt-50"
			>
				<motion.div
					whileHover={{ scale: 1.1 }}
					className="flex items-center gap-2"
				>
					<BsCalendar2Week style={{ fontSize: 18 }} />
					<p>January 24, 2023</p>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.1 }}
					className="flex items-center gap-2"
				>
					<PiClockCountdownLight style={{ fontSize: 21 }} />
					<p>10:00 AM - 12:00 PM</p>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.1 }}
					className="flex items-center gap-2"
				>
					<IoLocationOutline style={{ fontSize: 21 }} />
					<p>Marina Hall, ADNEC</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
