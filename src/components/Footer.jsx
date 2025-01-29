import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import "../styles/variable.css";

import {
	RiFacebookLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";
import { useState } from "react";

export default function Footer() {
	const [openGender, setOpenGender] = useState(false);
	const [openPosition, setOpenPosition] = useState(false);

	const toggleGenderOpen = () => {
		setOpenGender(!openGender);
	};
	const togglePositionOpen = () => {
		setOpenPosition(!openPosition);
	};
	return (
		<footer className="bg-blue-700 text-white py-16 px-6">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-semibold mb-4 secondary-teal">
					Register Now
				</h1>
				<p className="text-lg mb-8">
					Register now and contribute to shaping the future of
					education!
				</p>

				<form className="space-y-6 mb-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						<div className="space-y-2">
							<label
								htmlFor="firstName"
								className="block text-sm"
							>
								First Name*
							</label>
							<input
								type="text"
								id="firstName"
								className="w-full px-4 py-2 rounded bg-blue-600/50 placeholder-white/70"
								placeholder="First Name"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="lastName" className="block text-sm">
								Last Name*
							</label>
							<input
								type="text"
								id="lastName"
								className="w-full px-4 py-2 rounded bg-blue-600/50 placeholder-white/70"
								placeholder="Last Name"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="gender" className="block text-sm">
								Gender*
							</label>
							<div className="relative">
								<select
									id="gender"
									className="w-full px-4 py-2 rounded bg-blue-600/50 appearance-none"
									placeholder="Select"
									onClick={setOpenGender}
								>
									<option value="">Select</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
								<div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center px-2 pointer-events-none">
									{!openGender ? (
										<CgChevronUp className="w-4 h-4 text-white" />
									) : (
										<CgChevronDown className="w-4 h-4 text-white" />
									)}
								</div>
							</div>
						</div>
						<form className="space-y-2">
							<label htmlFor="position" className="block text-sm">
								Position*
							</label>
							<div className="relative">
								<select
									id="position"
									className="w-full px-4 py-2 rounded bg-gray-600/50 appearance-none"
									onClick={togglePositionOpen}
								>
									<option value="teacher">Teacher</option>
									<option value="student">Student</option>
									<option value="administrator">
										Administrator
									</option>
								</select>
								<div className="absolute inset-y-0 right-0 flex flex-col items-cent	er justify-center px-2 pointer-events-none">
									{!openPosition ? (
										<CgChevronUp className="w-4 h-4 text-white" />
									) : (
										<CgChevronDown className="w-4 h-4 text-white" />
									)}
								</div>
							</div>
						</form>
					</div>
					<button
						type="submit"
						className="bg-blue-200 text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors"
					>
						REGISTER NOW
					</button>
				</form>

				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-600">
					<a
						href="http://www.ecae.ac.ae"
						className="text-sm mb-4 md:mb-0"
					>
						www.ecae.ac.ae
					</a>
					<div className="flex items-center gap-4">
						<span className="text-sm">Follow us on:</span>
						<div className="flex gap-2 items-center justify-center ">
							<a
								href=""
								className="w-8 h-8 flex items-center justify-center  rounded-full border border-white/30 hover:bg-blue-600 transition-colors"
							>
								<RiFacebookLine />
							</a>
							<a
								href=""
								className="w-8 h-8 flex items-center justify-center  rounded-full border border-white/30 hover:bg-blue-600 transition-colors"
							>
								{" "}
								<RiTwitterLine />
							</a>
							<a
								href=""
								className="w-8 h-8 flex items-center justify-center  rounded-full border border-white/30 hover:bg-blue-600 transition-colors"
							>
								<RiInstagramLine />
							</a>
							<a
								href=""
								className="w-8 h-8 flex items-center justify-center  rounded-full border border-white/30 hover:bg-blue-600 transition-colors"
							>
								{" "}
								<RiLinkedinLine />
							</a>
							<a
								href=""
								className="w-8 h-8 flex items-center justify-center  rounded-full border border-white/30 hover:bg-blue-600 transition-colors"
							>
								{" "}
								<RiYoutubeLine />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
