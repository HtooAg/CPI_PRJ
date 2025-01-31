import { useRef, useState } from "react";
import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "../styles/variable.css";

// Import local images
import headerImage from "../assets/img/slider1.jpg";
import headerImage2 from "../assets/img/slider2.jpg";
import headerImage3 from "../assets/img/slider3.jpg";

const slides = [
	{
		image: headerImage,
		title: "Transform & Design Conference",
	},
	{
		image: headerImage2,
		title: "Innovation Summit",
	},
	{
		image: headerImage3,
		title: "Tech Symposium",
	},
];

function CustomArrow({ direction, onClick }) {
	const Icon = direction === "left" ? BiArrowToLeft : BiArrowToRight;
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={onClick}
			className={`absolute top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 p-3 text-gray-800 shadow-md transition hover:bg-white ${
				direction === "left" ? "left-4" : "right-4"
			}`}
			aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
		>
			<Icon size={24} />
		</motion.button>
	);
}

export default function EventSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "350px",
		slidesToShow: 1,
		speed: 500,
		dots: true,
		arrows: false,
		beforeChange: (_, next) => setCurrentSlide(next),
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					centerPadding: "80px",
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					centerPadding: "60px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: "20px",
					slidesToShow: 1,
				},
			},
		],
	};

	const goToNextSlide = () => sliderRef.current?.slickNext();
	const goToPrevSlide = () => sliderRef.current?.slickPrev();

	return (
		<motion.div
		id="slider"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5}}
			className="relative bg-blue-600 lg:px-45 py-12"
		>
			<div className="lg:max-w-6xl sm:max-w-2xl mx-auto h-160">
				<motion.h2
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1, duration: 1.5 }}
					className="mb-8 text-4xl font-semibold secondary-teal"
				>
					Glimpse from Our Last Event
				</motion.h2>
				<div className="mx-auto max-w-7xl">
					<div className="relative">
						<Slider ref={sliderRef} {...settings}>
							{slides.map((slide, index) => {
								const isActive = index === currentSlide;
								return (
									<div key={index} className="px-2">
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{
												opacity: isActive ? 1 : 0.5,
												scale: isActive ? 1.1 : 0.9,
											}}
											transition={{ duration: 0.3 }}
											className={`relative overflow-hidden rounded-lg`}
										>
											<img
												src={
													slide.image ||
													"/placeholder.svg"
												}
												alt={slide.title}
												className="h-[400px] w-full object-cover bg-center"
											/>
											<div className="absolute inset-0 bg-black/20" />
											<motion.div
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{
													delay: 0.2,
													duration: 0.3,
												}}
												className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
											>
												<h3 className="text-xl font-semibold text-white">
													{slide.title}
												</h3>
											</motion.div>
										</motion.div>
									</div>
								);
							})}
						</Slider>
						<CustomArrow direction="left" onClick={goToPrevSlide} />
						<CustomArrow
							direction="right"
							onClick={goToNextSlide}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
