import React from "react";
import "../styles/HomeStay.css";
import Footer from "./footer";

// Update these imports to match only the images that exist in your src/img/POI/ folders
import azing1 from '../img/POI/AZING/A1.jpg';
import azing2 from '../img/POI/AZING/A2.jpg';
import azing3 from '../img/POI/AZING/A3.jpg';
import azing4 from '../img/POI/AZING/A4.jpg';
import azing5 from '../img/POI/AZING/A5.jpg';

import resum1 from '../img/POI/RESUM/R1.jpg';
import resum2 from '../img/POI/RESUM/R2.jpg';
// import resum3 from '../img/POI/RESUM/R3.jpg';
// import resum4 from '../img/POI/RESUM/R4.jpg';
// import resum5 from '../img/POI/RESUM/R5.jpg';

//import rinchen1 from '../img/POI/RINCHEN/R1.jpg';
//import rinchen2 from '../img/POI/RINCHEN/R2.jpg';
// import rinchen3 from '../img/POI/RINCHEN/R3.jpg';
// import rinchen4 from '../img/POI/RINCHEN/R4.jpg';
// import rinchen5 from '../img/POI/RINCHEN/R5.jpg';

import british1 from '../img/POI/BRITISH/B1.png';
import british2 from '../img/POI/BRITISH/B2.png';
import british3 from '../img/POI/BRITISH/B3.png';
import british4 from '../img/POI/BRITISH/B4.png';
import british5 from '../img/POI/BRITISH/B5.png';

import rami1 from '../img/POI/RAMI/R1.jpg';
import rami2 from '../img/POI/RAMI/R2.jpg';
import rami3 from '../img/POI/RAMI/R3.jpg';
import rami4 from '../img/POI/RAMI/R4.jpg';
// import rami5 from '../img/POI/RAMI/R5.jpg';

import rinchenpong1 from '../img/POI/RINCHENPONG/R1.jpeg';
import rinchenpong2 from '../img/POI/RINCHENPONG/R2.jpeg';
import rinchenpong3 from '../img/POI/RINCHENPONG/R3.jpeg';
import rinchenpong4 from '../img/POI/RINCHENPONG/R4.jpeg';
import rinchenpong5 from '../img/POI/RINCHENPONG/R5.jpeg';

// Use a placeholder for missing images
const placeholder = "https://placehold.co/400x300?text=Image+Not+Found";

// 5 images for each place (replace with your real images if available)
const placeImages = {
	"Azing Farm": [
		azing1, azing2, azing3, azing4, azing5
	],
	"Resum Monastary": [
		resum1, resum2, placeholder, placeholder, placeholder
	],
	"Rinchen Choling Monastary": [
		//rinchen1, rinchen2, placeholder, placeholder, placeholder
	],
	"British Bunglow": [
		british1, british2, british3, british4, british5
	],
	"Rami Dham Samdong": [
		rami1, rami2, rami3, rami4, placeholder
	],
	"Rinchenpong Monastary": [
		rinchenpong1, rinchenpong2, rinchenpong3, rinchenpong4, rinchenpong5
	],
};

const places = [
	{
		imageAlt: "Azing Farm",
		title: "Azing Farm",
		description:
			"The privately owned farm is located in 12th mile, Rinchenpong. Visitors can witness different kinds of fruits and vegetables in the area. Along with it, the farm owner also manufactures organic wine and honey. A short hike down the hill from the road leads to Azing farm.",
		link: "https://en.wikipedia.org/wiki/Kaluk",
	},
	{
		imageAlt: "Resum Monastary",
		title: "Resum Monastary",
		description:
			"Resume Monastery, also known as Resum Gompa, is an old, partially dilapidated monastery near Rinchenpong in Sikkim, India. It's known for its naive paintings, stunning 360-degree mountain panorama, and peaceful, meditative atmosphere.",
		link: "https://en.wikipedia.org/wiki/Rinchenpong",
	},
	{
		imageAlt: "Rinchen Choling Monastary",
		title: "Rinchen Choling Monastary",
		description:
			"Gurung Buddhist Society established Rinchen Choling Tamu Monastery in West Sikkim, near Rinchenpong Bazaar in 1996. The monastery was erected on the ruined site of a Tshamkhang where once Lt. Risung Lama spent sometime in meditation.",
		link: "https://en.wikipedia.org/wiki/Singshore_Bridge",
	},
	{
		imageAlt: "British Bunglow",
		title: "British Bunglow",
		description:
			"British Heritage Bungalow is similar to the other bungalows from the British era and is uniquely furnished in wood and stones. The Rinchenpong bungalow is surrounded by thriving luscious green forest. The Bungalow is quite spacious with two rooms and a wide portico with a beautiful garden.",
		link: "https://en.wikipedia.org/wiki/Barsey_Rhododendron_Sanctuary",
	},
	{
		imageAlt: "Rami Dham Samdong",
		title: "Rami Dham Samdong",
		description:
			"Nestled atop the hills above Bara Samdong in the Soreng district, Ramidham stands as a famous religious site, drawing devotees and nature lovers alike.",
		link: "https://en.wikipedia.org/wiki/Adventure_travel",
	},
	{
		imageAlt: "Rinchenpong Monastary",
		title: "Rinchenpong Monastary",
		description:
			"Rinchenpong Monastery is situated above the twin villages of Rinchenpong (Richenpong) and Kaluk in West Sikkim, at a height of over 1,700 metres (5,500 ft) in the northeastern state of Sikkim, India. This 18th century monastery is a popular tourist attraction in West Sikkim.",
		link: "https://en.wikipedia.org/wiki/Travel",
		
	},
];

// Image Modal component (reusable, similar to HomeStay.js)
function ImageModal({ open, images, current, onClose, onPrev, onNext }) {
	if (!open) return null;
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
				style={{
					background: "transparent",
					boxShadow: "none",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				<div className="modal-slider">
					<button
						className="slider-arrow left"
						onClick={(e) => {
							e.stopPropagation();
							onPrev();
						}}
					>
						&lt;
					</button>
					<img
						src={images[current]}
						alt="Place Full"
						className="modal-image"
					/>
					<button
						className="slider-arrow right"
						onClick={(e) => {
							e.stopPropagation();
							onNext();
						}}
					>
						&gt;
					</button>
				</div>
				<div className="modal-thumbnails">
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt="thumb"
							className={idx === current ? "active" : ""}
							onClick={() => onNext(idx)}
							style={{ cursor: "pointer" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

// Popup Modal for Place Details
function PlaceModal({ open, place, images, current, onClose, onPrev, onNext }) {
	const [hovered, setHovered] = React.useState(false);

	const getImageSrc = (src) => {
		if (src.startsWith("http")) return src;
		const cleanSrc = src.startsWith("/") ? src.substring(1) : src;
		return process.env.PUBLIC_URL
			? `${process.env.PUBLIC_URL}/${cleanSrc}`
			: `/${cleanSrc}`;
	};

	React.useEffect(() => {
		if (!hovered || images.length <= 1) return;
		const interval = setInterval(() => {
			onNext();
		}, 1200);
		return () => clearInterval(interval);
	}, [hovered, images, onNext]);

	if (!open || !place) return null;
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
				style={{
					maxWidth: 1100, // Increased width
					width: "98vw",
					minHeight: 0,
					padding: 0,
					borderRadius: 12,
					overflow: "visible",
					background: "#fff",
					boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
					position: "relative",
					display: "flex",
					flexDirection: "row",
					height: "480px", // Increased height a bit
				}}
			>
				{/* Left: Image slider */}
				<div
					style={{
						flex: "0 0 44%",
						background: "#f8fafc",
						borderRadius: "0",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						minWidth: 0,
						position: "relative",
						height: "100%",
						minHeight: 180,
					}}
				>
					<button
						className="slider-arrow left"
						onClick={(e) => {
							e.stopPropagation();
							onPrev();
						}}
						style={{
							left: 8,
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						&lt;
					</button>
					<img
						src={getImageSrc(images[current])}
						alt={place.imageAlt}
						style={{
							width: "100%",
							maxWidth: 370,
							maxHeight: 420, // Increased image height for larger popup
							objectFit: "cover",
							borderRadius: "0",
							boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
							background: "#eee",
						}}
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					/>
					<button
						className="slider-arrow right"
						onClick={(e) => {
							e.stopPropagation();
							onNext();
						}}
						style={{
							right: 8,
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						&gt;
					</button>
					<div
						className="slider-dots"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 10,
							display: "flex",
							justifyContent: "center",
							gap: 6,
						}}
					>
						{images.map((_, idx) => (
							<span
								key={idx}
								className={idx === current ? "active" : ""}
								style={{
									display: "inline-block",
									width: 10,
									height: 10,
									borderRadius: "50%",
									background:
										idx === current ? "#238b45" : "#bfc5c7",
									opacity: idx === current ? 1 : 0.7,
								}}
							></span>
						))}
					</div>
				</div>
				{/* Right: Details */}
				<div
					style={{
						flex: "1 1 56%",
						padding: "2rem 2.5rem 1.5rem 2.5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minWidth: 0,
						position: "relative",
						textAlign: "left",
					}}
				>
					<button
						className="modal-close"
						onClick={onClose}
						style={{
							position: "absolute",
							top: 12,
							right: 16,
							background: "none",
							border: "none",
							fontSize: 28,
							cursor: "pointer",
							zIndex: 2,
							color: "#222",
						}}
					>
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="18"
								y1="6"
								x2="6"
								y2="18"
								stroke="#2d323c"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<line
								x1="6"
								y1="6"
								x2="18"
								y2="18"
								stroke="#2d323c"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
					<h2
						style={{
							fontSize: "2rem",
							fontWeight: 700,
							margin: "0 0 0.5rem 0",
							color: "#222",
							textAlign: "left",
						}}
					>
						{place.title}
					</h2>
					<div
						style={{
							color: "#238b45",
							fontWeight: 500,
							marginBottom: 8,
							textAlign: "left",
						}}
					>
						{place.imageAlt}
					</div>
					<div
						style={{
							marginBottom: 18,
							color: "#555",
							fontSize: "1.05rem",
							textAlign: "left",
						}}
					>
						{place.description}
					</div>
					<div style={{ marginBottom: 10, textAlign: "left" }}>
						<span
							style={{
								fontWeight: 600,
								color: "#666",
							}}
						>
							Location:{" "}
						</span>
						<span
							style={{
								color: "#333",
							}}
						>
							{place.imageAlt}
						</span>
					</div>
					<a
						href={place.link}
						className="btn0"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginTop: 10,
							display: "inline-block",
							textAlign: "left",
							width: "100%",
						}}
					>
						View on Wikipedia
					</a>
				</div>
			</div>
		</div>
	);
}

// Card with slider and popup
const Card = ({ title, imageAlt, description, link, onImageClick }) => {
	const images = placeImages[title] || [];
	const [current, setCurrent] = React.useState(0);
	const [hovered, setHovered] = React.useState(false);

	React.useEffect(() => {
		if (!hovered || images.length <= 1) return;
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 1200);
		return () => clearInterval(interval);
	}, [hovered, images.length]);

	return (
		<div className="card">
			<div
				className="card-image-slider"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={() =>
					onImageClick(images, current, { title, imageAlt, description, link })
				}
				style={{ position: "relative", cursor: "pointer" }}
			>
				<img src={images[current]} alt={imageAlt} className="card-image" />
				{images.length > 1 && (
					<div className="slider-dots">
						{images.map((_, idx) => (
							<span
								key={idx}
								className={idx === current ? "active" : ""}
							></span>
						))}
					</div>
				)}
			</div>
			<div className="card-content">
				<h3 className="card-title">{title}</h3>
				<p className="card-description">{description}</p>
				<a
					href="#"
					className="btn0"
					onClick={(e) => {
						e.preventDefault();
						onImageClick(images, current, { title, imageAlt, description, link });
					}}
				>
					Learn more
				</a>
			</div>
		</div>
	);
};

export default function PlaceOfInterest() {
	const [modal, setModal] = React.useState({
		open: false,
		images: [],
		current: 0,
		place: null,
	});

	const openModal = (images, current, place) =>
		setModal({ open: true, images, current, place });
	const closeModal = () =>
		setModal({ open: false, images: [], current: 0, place: null });
	const prevImg = () => {
		setModal((m) => ({
			...m,
			current: (m.current - 1 + m.images.length) % m.images.length,
		}));
	};
	const nextImg = (eOrIdx) => {
		if (typeof eOrIdx === "number") {
			setModal((m) => ({ ...m, current: eOrIdx }));
		} else {
			setModal((m) => ({
				...m,
				current: (m.current + 1) % m.images.length,
			}));
		}
	};

	return (
		<div className="App">
			<PlaceModal
				open={modal.open}
				images={modal.images}
				current={modal.current}
				place={modal.place}
				onClose={closeModal}
				onPrev={prevImg}
				onNext={nextImg}
			/>
			<section className="heading1" id="heading-places">
				<h2>
					Places <span>of Interest</span>
				</h2>
			</section>
			<section className="card-section">
				{places.map((place, idx) => (
					<Card key={idx} {...place} onImageClick={openModal} />
				))}
			</section>
			<Footer />
		</div>
	);
}
