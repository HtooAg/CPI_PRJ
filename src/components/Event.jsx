
import Vector from "../assets/img/Vector.svg";
import mainVector from "../assets/img/mainVector.svg";
import "../styles/variable.css";

export default function Event() {
	return (
		<div className="primary-background text-white flex flex-col md:flex-row justify-between gap-8 p-8">
			{/* Left Section */}
			<div className="flex-1">
				<h1 className="text-3xl secondary-teal font-semibold mb-4">
					Event Overview
				</h1>
				<p className="mb-4">
					The Education First Forum welcomes you back to its second
					edition on January 24th, 2024, aligning with the
					International Day of Education continuing ECAE's commitment
					to advancing education. <br /> <br />
					This flagship event, inaugurated last year on January 24,
					2023 under the theme "Power of Educators" brought together
					over 200 stakeholders to engage in human-centric design and
					co-creation sessions, the findings of which significantly
					shaped strategies to advance the UAE's education sector in
					alignment with the Centennial 2071 vision.
				</p>
				<button className="secondary-background primary-blue font-bold cursor-pointer text-white px-8 py-3 rounded-3xl transition-colors uppercase hover:opacity-90">
					Register Now
				</button>
			</div>

			{/* Right Section */}
			<div className="relative overflow-hidden">
				<img
					src={mainVector || "/placeholder.svg"}
					alt="Background Vector"
					className="absolute inset-0 w-full h-full object-contain opacity-10"
				/>
				<div className="relative z-10 p-4 md:p-6">
					<p className="">
						ECAE is now poised to unveil its new strategy and brand
						identity at this year's event under the overarching
						theme: 'From Ask to Action'. This encapsulates our
						journey, emphasizing the progression from initial
						inquiries and insights to tangible strategies and
						transformative actions.
					</p>
				</div>
			</div>
		</div>
	);
}
