import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Event() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
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

	const vectorVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeOut",
			},
		},
	};

	return (
		<div id="event" className="relative min-h-screen bg-[#0039B4] px-10 py-8 ">
			<motion.div
				ref={ref}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="relative z-10 max-w-6xl mx-auto text-gray-300"
			>
				<motion.h1
					variants={itemVariants}
					className="text-2xl md:text-4xl lg:text-4xl font-semibold secondary-teal mb-6"
				>
					Event Overview
				</motion.h1>

				<div className="grid md:grid-cols-2 gap-8 lg:gap-16">
					<div className="space-y-6 flex">
						<motion.div variants={itemVariants}>
							<motion.p
								variants={itemVariants}
								className="text-sm md:text-base lg:text-lg"
							>
								The Education First Forum welcomes you back to
								its second edition on January 24th, 2024,
								aligning with the International Day of Education
								continuing ECAE's commitment to advancing
								education.
							</motion.p>

							<motion.p
								variants={itemVariants}
								className="text-sm md:text-base lg:text-lg"
							>
								This flagship event, inaugurated last year on
								January 24, 2023 under the theme "Power of
								Educators" brought together over 200
								stakeholders to engage in human-centric design
								and co-creation sessions, the findings of which
								significantly shaped strategies to advance the
								UAE's education sector in alignment with the
								Centennial 2071 vision.
							</motion.p>

							<motion.button
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase mt-5"
							>
								<button type="submit">REGISTER NOW</button>
							</motion.button>
						</motion.div>
					</div>

					<div className="relative mt-8 md:mt-0 flex">
						<motion.div
							variants={vectorVariants}
							className="w-24 md:w-32 h-auto z-0"
						>
							<svg
								viewBox="0 0 100 350"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full"
							>
								<path
									d="M82.3185 -1.72417e-05C89.902 7.56007 97.4084 15.0433 105 22.6115C93.0767 34.498 81.0965 46.4412 69.0027 58.4977C69.3843 58.7122 69.6725 58.8862 69.9689 59.0359C73.9555 61.0595 77.6417 63.5242 80.9179 66.5677C89.0616 74.1319 94.0997 83.3796 95.8575 94.3515C99.1743 115.073 88.8667 135.293 70.1272 144.844C65.1419 147.385 59.8602 149.037 54.2903 149.648C38.8634 151.344 25.4624 146.908 14.3104 136.13C7.31148 129.368 2.95137 121.091 0.986476 111.568C0.170475 107.614 -0.158367 103.619 0.0770994 99.5966C0.783483 87.447 5.25322 76.8677 13.8801 68.227C36.4479 45.6236 59.1011 23.1093 81.7257 0.558485C81.9287 0.356138 82.1439 0.165907 82.3266 -0.00407608L82.3185 -1.72417e-05Z"
									fill="#ADEDEA"
									fillOpacity="0.2"
								/>
							</svg>
						</motion.div>

						<motion.div
							variants={vectorVariants}
							className="relative aspect-square"
						>
							<svg
								viewBox="0 0 670 670"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 w-full h-full"
							>
								<path
									d="M144.73 670C96.3398 636.615 48.442 603.723 0.00012207 570.286C76.0823 514.213 152.527 458.776 229.697 402.615C227.262 401.242 225.423 400.128 223.532 399.17C198.094 390.219 174.572 378.444 153.667 364.966C101.702 333.556 69.5543 294.37 58.3376 248.15C37.1734 155.533 102.946 65.1271 222.522 22.9987C254.333 11.7324 288.035 4.16441 323.576 1.25323C422.014 -6.59964 507.526 13.7888 578.686 61.7654C623.346 91.047 651.167 127.017 663.705 169.964C668.912 187.27 671.01 204.835 669.508 222.581C665.001 276.339 636.479 324.046 581.432 363.347C437.427 464.008 292.879 564.1 148.512 664.425C147.217 665.72 145.844 666.938 144.678 668.026L144.73 670Z"
									fill="#ADEDEA"
									fillOpacity="0.2"
								/>
							</svg>

							<motion.div
								variants={itemVariants}
								className="relative z-10 md:p-12 text-center flex flex-col justify-center h-full -right-3"
							>
								<p className="text-sm md:text-base lg:text-lg mb-40 p-12">
									ECAE is now poised to unveil its new
									strategy and brand identity at this year's
									event under the overarching theme: 'From Ask
									to Action' This encapsulates our journey,
									emphasizing the progression from initial
									inquiries and insights to tangible
									strategies and transformative actions.
								</p>
							</motion.div>
						</motion.div>
					</div>
				</div>

				<motion.div variants={itemVariants} className="space-y-4 mt-10">
					<motion.video
						variants={itemVariants}
						className="h-full w-full rounded-lg"
						controls
					>
						<source
							src="https://docs.material-tailwind.com/demo.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</motion.video>

					<motion.p variants={itemVariants} className="pt-3">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem <br /> Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an <br /> unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</motion.p>
				</motion.div>
			</motion.div>
		</div>
	);
}
