"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function EventHighlights() {
	const [screenSize, setScreenSize] = useState("large");
	const decorativeBubbles = [
		{ top: "10%", left: "5%", size: "1rem" },
		{ top: "20%", right: "15%", size: "2rem" },
		{ top: "45%", left: "8%", size: "1.5rem" },
		{ top: "60%", right: "10%", size: "1rem" },
		{ top: "75%", left: "20%", size: "2rem" },
		{ top: "85%", right: "25%", size: "1.5rem" },
		{ top: "15%", left: "80%", size: "1rem" },
		{ top: "35%", left: "90%", size: "2rem" },
		{ top: "65%", left: "85%", size: "1.5rem" },
	];

	useEffect(() => {
		const checkScreenSize = () => {
			if (window.innerWidth < 768) {
				setScreenSize("small");
			} else if (window.innerWidth < 1024) {
				setScreenSize("medium");
			} else {
				setScreenSize("large");
			}
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const highlights = [
		{
			title: "Stakeholder Engagement:",
			content:
				"A platform to hear directly from our students and educators, ensuring alignment with their needs and aspirations.",
			bgColor: "bg-white",
			mobileScale: "scale-65",
			mobileTransform: "-translate-y-4 -translate-x-34",
			largeScale: "lg:scale-100",
			largeTransform: "lg:translate-y-42 lg:translate-x-68",
		},
		{
			title: "Immersive Experiences:",
			content:
				"Leveraging digital-first engagements, the forum will offer immersive experiences that underscore ECAE's pivotal role in shaping the UAE's educational landscape, emphasizing future-readiness, innovation, and transformation.",
			bgColor: "bg-white",
			mobileScale: "scale-75",
			mobileTransform: "translate-x-14 -translate-y-52",
			largeScale: "lg:scale-125",
			largeTransform: "lg:-translate-y-24 lg:translate-x-32",
		},
		{
			title: "Brand Identity Reveal:",
			content: "Unveiling the updated brand persona and messaging.",
			bgColor: "bg-gray-100",
			mobileScale: "scale-55",
			mobileTransform: "translate-x-23 -translate-y-202",
			largeScale: "lg:scale-80",
			largeTransform: "lg:translate-x-14",
		},
		{
			title: "Strategy Launch:",
			content: "Rollout of ECAE's refreshed strategic direction.",
			bgColor: "bg-[#B3E6E8]",
			mobileScale: "scale-50",
			mobileTransform: "-translate-x-35 -translate-y-204",
			largeScale: "lg:scale-75",
			largeTransform: "lg:-translate-y-22 lg:translate-x-136",
		},
		{
			title: "Future Foresight:",
			content:
				"Future Foresight findings Presentation from a workshop involving 45 school students, teachers, principals and parents emphasizing key signals of change, future scenarios, and innovative approaches shaping the future of education.",
			bgColor: "bg-[#B3E6E8]",
			mobileScale: "scale-75",
			mobileTransform: "translate-x-10 -translate-y-250",
			largeScale: "lg:scale-110",
			largeTransform: "lg:-translate-y-1 lg:translate-x-118",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const bubbleVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: (i) => ({
			scale: 1,
			opacity: 1,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: "easeOut",
			},
		}),
	};

	return (
		<motion.div
			id="hilight"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="bg-gradient-to-br from-blue-900 to-blue-950 p-4 lg:p-8 relative overflow-hidden px-8"
		>
			{decorativeBubbles.map((bubble, index) => (
				<motion.div
					key={index}
					custom={index}
					variants={bubbleVariants}
					className="absolute rounded-full bg-blue-400/10 animate-float mt-5"
					style={{
						top: bubble.top,
						left: bubble.left,
						width: bubble.size,
						height: bubble.size,
						animationDelay: `${index * 0.2}s`,
					}}
				/>
			))}

			<div className="lg:max-w-6xl sm:max-w-2xl mx-auto">
				<motion.div
					variants={itemVariants}
					className="text-white mb-12 lg:mb-20 relative z-10 max-w-6xl mx-auto"
				>
					<h2 className="text-4xl lg:text-4xl font-semibold mb-4 text-[#B3E6E8]">
						Event Highlights
					</h2>
					<p className="text-blue-100 text-lg lg:text-xl">
						Lorem Ipsum is simply dummy text of{" "}
						<br className="hidden lg:block" />
						the printing and typesetting{" "}
						<br className="hidden lg:block" />
						industry.
					</p>
				</motion.div>

				<div className="max-w-6xl mx-auto relative lg:-translate-x-16">
					<motion.div
						variants={containerVariants}
						className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8"
					>
						{highlights.map((highlight, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className={`transform transition-all duration-300 
								${
									screenSize === "small"
										? `${highlight.mobileScale} ${highlight.mobileTransform}`
										: ""
								}
								${
									screenSize === "large"
										? `${highlight.largeScale} ${highlight.largeTransform}`
										: ""
								}
								w-full`}
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={`aspect-square ${
										highlight.bgColor
									} rounded-full p-3 sm:p-4 lg:p-8 
									flex items-center justify-center text-center transition-transform shadow-lg cursor-pointer
									${
										screenSize === "small"
											? "max-w-[350px] h-[350px]"
											: "max-w-[300px] h-[300px]"
									} 
									mx-auto`}
								>
									<div className="cursor-pointer">
										<h3
											className={`font-bold ${
												screenSize === "small"
													? "text-3xl"
													: "text-2xl lg:text-xl"
											} mb-1 lg:mb-2`}
										>
											{highlight.title}
										</h3>
										<p
											className={`${
												screenSize === "small"
													? "text-lg"
													: "text-md lg:text-md"
											} text-gray-600`}
										>
											{highlight.content}
										</p>
									</div>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
