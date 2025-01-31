import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/variable.css";

const events = [
	{
		time: "9:30 AM to 10:00 AM",
		title: "Registration, Networking",
	},
	{
		time: "10:00 AM - 11:00 AM",
		title: "Immersive Experience Walk Through",
	},
	{
		time: "11:00 AM - 11:10 AM",
		title: "Opening Ceremony",
	},
	{
		time: "11:10 AM - 11:20 AM",
		title: "Minister of State for Public Education & Advanced Technology,\nChairwoman of the College Board of Trustees",
		subtitle: "Keynote Address:\nHer Excellency Sarah bint Yousef Al Amiri",
	},
	{
		time: "11:20 AM - 11:25 AM",
		title: "A Student's View: Amna Al Mansoori, Grade 12",
	},
	{
		time: "11:25 AM - 11:40 AM",
		title: "Logo Reveal",
	},
	{
		time: "11:40 AM - 11:50 AM",
		title: "Intermission",
	},
	{
		time: "11:50 AM - 12:20 PM",
		title: "Joint Research & Research Study with Cambridge University",
		subtitle: "Presentation:",
	},
	{
		time: "12:20 PM - 12:30 PM",
		title: "Partnership Awards",
	},
	{
		time: "12:30 PM - 12:35 PM",
		title: "Closing Remarks",
	},
];

export default function EventAgenda() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

	return (
		<motion.div
			ref={containerRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			id="event_agenda"
			className="relative min-h-screen bg-[#00205B] p-8 overflow-hidden"
		>
			<motion.div
				style={{ y: backgroundY, opacity }}
				className="absolute right-30 bottom-40"
			>
				<svg
					width="500"
					height="720"
					viewBox="0 0 670 960"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M144.73 960C96.3398 911.615 48.442 863.723 0.00012207 815.286C76.0823 739.213 152.527 662.776 229.697 585.615C227.262 584.242 225.423 583.128 223.532 582.17C198.094 569.219 174.572 553.444 153.667 533.966C101.702 485.556 69.5543 426.37 58.3376 356.15C37.1734 223.533 102.946 94.1271 222.522 32.9987C254.333 16.7324 288.035 6.16441 323.576 2.25323C422.014 -8.59964 507.526 19.7888 578.686 88.7654C623.346 132.047 651.167 185.017 663.705 245.964C668.912 271.27 671.01 296.835 669.508 322.581C665.001 400.339 636.479 468.046 581.432 523.347C437.427 668.008 292.879 812.1 148.512 956.425C147.217 957.72 145.844 958.938 144.678 960.026L144.73 960Z"
						fill="#ADEDEA"
					/>
				</svg>
			</motion.div>

			<div className="z-10 max-w-6xl mx-auto flex flex-col">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h1 className="secondary-teal text-4xl font-semibold mb-8">
						Event Agenda
					</h1>
				</motion.div>
				<div className="flex ml-18">
					<motion.div style={{ opacity }} className="opacity-20">
						<svg
							width="70"
							height="60"
							viewBox="0 0 105 150"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M82.3185 -1.72417e-05C89.902 7.56007 97.4084 15.0433 105 22.6115C93.0767 34.498 81.0965 46.4412 69.0027 58.4977C69.3843 58.7122 69.6725 58.8862 69.9689 59.0359C73.9555 61.0595 77.6417 63.5242 80.9179 66.5677C89.0616 74.1319 94.0997 83.3796 95.8575 94.3515C99.1743 115.073 88.8667 135.293 70.1272 144.844C65.1419 147.385 59.8602 149.037 54.2903 149.648C38.8634 151.344 25.4624 146.908 14.3104 136.13C7.31148 129.368 2.95137 121.091 0.986476 111.568C0.170475 107.614 -0.158367 103.619 0.0770994 99.5966C0.783483 87.447 5.25322 76.8677 13.8801 68.227C36.4479 45.6236 59.1011 23.1093 81.7257 0.558485C81.9287 0.356138 82.1439 0.165907 82.3266 -0.00407608L82.3185 -1.72417e-05Z"
								fill="#ADEDEA"
							/>
						</svg>
					</motion.div>

					<div className="relative pl-4">
						<motion.div className="absolute left-[26px] top-[-20px] bottom-[50px] w-[4px] rounded-4xl bg-[#ADEDEA] origin-top"></motion.div>

						<div className="grid grid-rows-10 h-[1450px]">
							{events.map((event, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{
										duration: 0.5,
										delay: 0.1 * index,
									}}
									className="relative flex items-start"
								>
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.3,
											delay: 0.1 * index + 0.3,
										}}
										className="absolute left-[-4px] top-[10px] w-[32px] h-[32px] rounded-full bg-[#ADEDEA]"
									></motion.div>

									<div className="ml-10">
										<motion.p
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: 0.1 * index + 0.4,
											}}
											className="text-[#ADEDEA] lg:text-lg xs:text-sm"
										>
											{event.time}
										</motion.p>
										{event.subtitle && (
											<motion.p
												initial={{ opacity: 0, y: 10 }}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: 0.1 * index + 0.5,
												}}
												className="text-white/80 font-bold lg:text-lg whitespace-pre-line xs:text-sm"
											>
												{event.subtitle}
											</motion.p>
										)}
										<motion.p
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: 0.1 * index + 0.6,
											}}
											className="text-gray-400 lg:text-lg whitespace-pre-line xs:text-sm"
										>
											{event.title}
										</motion.p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
