import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CgChevronDown } from "react-icons/cg";
import "../styles/variable.css";

import {
	RiFacebookLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";
import { useState, useRef } from "react";

export default function Footer() {
	const [openGender, setOpenGender] = useState(false);
	const [openPosition, setOpenPosition] = useState(false);
	const footerRef = useRef(null);
	const isInView = useInView(footerRef, { once: true, amount: 0.3 });

	const { scrollYProgress } = useScroll({
		target: footerRef,
		offset: ["start end", "end start"],
	});

	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

	const toggleGenderOpen = () => {
		setOpenGender(!openGender);
	};
	const togglePositionOpen = () => {
		setOpenPosition(!openPosition);
	};

	return (
		<footer
			ref={footerRef}
			id="footer"
			className="footer-background text-white py-16"
		>
			<div className="lg:px-40 px-10">
				<motion.h1
					style={{ y: textY }}
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-4xl font-semibold mb-4 secondary-teal"
				>
					Register Now
				</motion.h1>
				<motion.p
					style={{ y: textY }}
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="text-lg mb-8 text-gray-300"
				>
					Register now and contribute to shaping the future of
					education!
				</motion.p>

				<div className="space-y-6 mb-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{[
							{
								id: "firstName",
								label: "First Name",
								placeholder: "First Name",
							},
							{
								id: "lastName",
								label: "Last Name",
								placeholder: "Last Name",
							},
							{
								id: "gender",
								label: "Gender",
								isSelect: true,
								options: ["Select", "Male", "Female"],
							},
							{
								id: "position",
								label: "Position",
								isSelect: true,
								options: [
									"Teacher",
									"Student",
									"Administrator",
								],
							},
						].map((field, index) => (
							<motion.div
								key={field.id}
								initial={{
									opacity: 0,
									x: index % 2 === 0 ? -20 : 20,
								}}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{
									delay: 0.4 + index * 0.1,
									duration: 0.5,
								}}
								className="space-y-2 text-gray-300"
							>
								<motion.label
									style={{ y: textY }}
									htmlFor={field.id}
									className="block text-lg"
								>
									{field.label}*
								</motion.label>
								{field.isSelect ? (
									<div className="relative">
										<select
											id={field.id}
											className="w-full px-4 py-4 rounded-4xl bg-gray-400/85 appearance-none text-gray-600"
											onClick={
												field.id === "gender"
													? toggleGenderOpen
													: togglePositionOpen
											}
										>
											{field.options.map((option) => (
												<option
													key={option}
													value={option.toLowerCase()}
												>
													{option}
												</option>
											))}
										</select>
										<motion.div
											initial={false}
											animate={{
												rotate:
													field.id === "gender"
														? openGender
															? 180
															: 0
														: openPosition
														? 180
														: 0,
											}}
											className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
										>
											<CgChevronDown className="w-4 h-4 text-gray-600" />
										</motion.div>
									</div>
								) : (
									<input
										type="text"
										id={field.id}
										className="w-full px-4 py-4 rounded-4xl bg-gray-400/85 placeholder-black/45"
										placeholder={field.placeholder}
									/>
								)}
							</motion.div>
						))}
					</div>
					<motion.button
						type="submit"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-200 text-blue-700 px-10 py-4 text-sm rounded-full font-bold hover:bg-blue-100 transition-colors mt-7"
					>
						REGISTER NOW
					</motion.button>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ delay: 0.8, duration: 0.5 }}
				className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white"
			>
				<div className="w-full flex flex-col md:flex-row items-center justify-between mx-45">
					<motion.a
						style={{ y: textY }}
						href="http://www.ecae.ac.ae"
						className="text-md mb-4 md:mb-0"
					>
						www.ecae.ac.ae
					</motion.a>
					<div className="flex items-center gap-4">
						<motion.span style={{ y: textY }} className="text-md">
							Follow us on:
						</motion.span>
						<div className="flex gap-2 items-center justify-center">
							{[
								RiFacebookLine,
								RiTwitterLine,
								RiInstagramLine,
								RiLinkedinLine,
								RiYoutubeLine,
							].map((Icon, index) => (
								<motion.a
									key={index}
									href="#"
									whileHover={{
										scale: 1.1,
										backgroundColor: "#2563eb",
									}}
									whileTap={{ scale: 0.9 }}
									className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 transition-colors"
								>
									<Icon />
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</footer>
	);
}
