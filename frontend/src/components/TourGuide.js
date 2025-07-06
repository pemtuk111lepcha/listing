import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/guide.css'

import mausamImg from '../img/tourguide/ongchen.jpeg';
import kiranImg from '../img/tourguide/gyanu.jpeg';
import pemtukImg from '../img/tourguide/RONESH.jpeg';
import geetaImg from '../img/tourguide/binod.jpeg';
import kewalImg from '../img/tourguide/ABU.jpeg';
const guides = [
	{
		id: "ongchen",
		img: mausamImg,
		name: "Ongchen Lepcha",
		specialty: "Trekking Guide",
		languages: "English, Hindi, Nepali",
		bio: "Ongchen is an experienced trekking guide who has completed over 100 tours in Sikkim. He is passionate about sharing the beauty of the region and ensuring every trek is memorable and safe.",
		rating: 4.9,
		modal: {
			pic: mausamImg,
			name: "Ongchen Lepcha",
			specialty: "Trekking Guide",
			bio: "Ongchen is an experienced trekking guide who has completed over 100 tours in Sikkim. He is passionate about sharing the beauty of the region and ensuring every trek is memorable and safe.",
			years: "3 years",
			tours: "100+ tours",
			certifications: "Certified Trek",
			languages: "English, Hindi, Nepali",
			contact: "8101064197",
			email: "ongchenlepcha27@gmail.com",
			rating: 4.9
		},
	},
	{
		id: "kiran",
		img: kiranImg,
		name: "Gyanu Rai",
		specialty: "Trekking Guide",
		languages: "English, Hindi, Nepali",
		bio: "Gyanu Rai is a seasoned trekking guide with 6 years of experience and over 15 treks completed. He holds a Tourism Diploma, Mountaineering Course, and Guide Course certifications, and is fluent in English, Hindi, and Nepali.",
		rating: 4.7,
		modal: {
			pic: kiranImg,
			name: "Gyanu Rai",
			specialty: "Trekking Guide",
			bio: "Gyanu Rai is a seasoned trekking guide with 6 years of experience and over 15 treks completed. He holds a Tourism Diploma, Mountaineering Course, and Guide Course certifications, and is fluent in English, Hindi, and Nepali.",
			years: "6 years",
			tours: "15 treks",
			certifications: "Tourism Diploma, Mountaineering Course, Guide Course",
			languages: "English, Hindi, Nepali",
			contact: "+91 7872132183 / +91 7431812092",
			email: "gyanurai65@gmail.com",
			rating: 4.7
		},
	},
	{
		id: "pemtuk",
		img: pemtukImg,
		name: "Ronesh Gurung",
		specialty: "Trekking and Hiking in West Sikkim",
		languages: "English, Hindi, Nepali",
		bio: "Ronesh Gurung is a dedicated trekking and hiking guide in West Sikkim with over 4 years of experience and 100+ tours completed. He is a certified trek leader and is fluent in English, Hindi, and Nepali.",
		rating: 4.8,
		modal: {
			pic: pemtukImg,
			name: "Ronesh Gurung",
			specialty: "Trekking and Hiking in West Sikkim",
			bio: "Ronesh Gurung is a dedicated trekking and hiking guide in West Sikkim with over 4 years of experience and 100+ tours completed. He is a certified trek leader and is fluent in English, Hindi, and Nepali.",
			years: "4 years",
			tours: "100+",
			certifications: "Certified Trek Leader",
			languages: "English, Hindi, Nepali",
			contact: "9883923687",
			email: "gurungronesh@gmail.com",
			rating: 4.8
		},
	},
	{
		id: "geeta",
		img: geetaImg,
		name: "Binod Gurung",
		specialty: "Trek and Tour Leader (India, Nepal, Bhutan)",
		languages: "English, Nepali, Hindi",
		bio: "Binod Gurung is a trek and tour leader with 16 years of experience across India, Nepal, and Bhutan. He is a knowledgeable storyteller and explorer, having completed over 1000 tours.",
		rating: 5.0,
		modal: {
			pic: geetaImg,
			name: "Binod Gurung",
			specialty: "Trek and Tour Leader (India, Nepal, Bhutan)",
			bio: "Binod Gurung is a trek and tour leader with 16 years of experience across India, Nepal, and Bhutan. He is a knowledgeable storyteller and explorer, having completed over 1000 tours.",
			years: "16 years",
			tours: "1000+",
			certifications: "Trek and Tour Leader",
			languages: "English, Nepali, Hindi",
			contact: "9609874824 / 8370810274",
			email: "binodhgurung1@gmail.com",
			rating: 5.0
		},
	},
	{
		id: "kewal",
		img: kewalImg,
		name: "Abu Gemba",
		specialty: "Tour Guide (Sribadam, West Sikkim, Soreng District)",
		languages: "English, Hindi, Nepali",
		bio: "Abu Gemba is a dedicated tour guide aiming to create lifelong memories for visitors through engaging storytelling and local insights. Skilled in leadership, teamwork, problem solving, and communication. Fresher, M.A (Hons), Sikkim University (2021).",
		rating: 4.6,
		modal: {
			pic: kewalImg,
			name: "Abu Gemba",
			specialty: "Tour Guide (Sribadam, West Sikkim, Soreng District)",
			bio: "Abu Gemba is a dedicated tour guide aiming to create lifelong memories for visitors through engaging storytelling and local insights. Skilled in leadership, teamwork, problem solving, and communication. Fresher, M.A (Hons), Sikkim University (2021).",
			years: "Fresher",
			tours: "N/A",
			certifications: "Tour Guide",
			languages: "English, Hindi, Nepali",
			contact: "9832901264",
			email: "abugemba98@gmail.com",
			rating: 4.6
		},
	},
	
	
];

// StarRating component
function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
	return (
		<span className="star-rating">
			{[...Array(fullStars)].map((_, i) => (
				<i key={`full-${i}`} className="fas fa-star" style={{ color: "#FFD700" }}></i>
			))}
			{halfStar && <i className="fas fa-star-half-alt" style={{ color: "#FFD700" }}></i>}
			{[...Array(emptyStars)].map((_, i) => (
				<i key={`empty-${i}`} className="far fa-star" style={{ color: "#FFD700" }}></i>
			))}
			<span style={{ marginLeft: 6, color: "#666", fontWeight: 500 }}>{rating.toFixed(1)}</span>
		</span>
	);
}

function GuideModal({ guide, onClose }) {
	const [reviewText, setReviewText] = useState('');
	const [reviewUser, setReviewUser] = useState('');
	const [reviewStars, setReviewStars] = useState(5);
	const [reviews, setReviews] = useState([]);
	const [stars, setStars] = useState([]);
	const [submitting, setSubmitting] = useState(false);

	const BACKEND_URL = "http://localhost:5000/api/tourguide-reviews";

	// Fetch reviews from backend on mount
	React.useEffect(() => {
		fetch(`${BACKEND_URL}?guide=${encodeURIComponent(guide.name)}`)
			.then(res => res.json())
			.then(data => {
				if (Array.isArray(data)) {
					setReviews(data.filter(r => r.comment && r.comment.trim() !== ""));
					setStars(data.map(r => r.stars).filter(s => typeof s === "number"));
				}
			})
			.catch(() => {});
	}, [guide.name]);

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (!reviewText.trim() || !reviewUser.trim()) return;
		setSubmitting(true);

		const reviewPayload = {
			guide: guide.name,
			user: reviewUser.trim(),
			comment: reviewText.trim(),
			stars: reviewStars
		};

		fetch(BACKEND_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(reviewPayload)
		})
			.then(res => res.json())
			.then(saved => {
				if (saved.comment && saved.comment.trim() !== "") {
					setReviews([...reviews, saved]);
				}
				if (typeof saved.stars === "number") {
					setStars([...stars, saved.stars]);
				}
				setReviewText('');
				setReviewUser('');
				setReviewStars(5);
				setSubmitting(false);
			})
			.catch(() => {
				setReviewText('');
				setReviewUser('');
				setReviewStars(5);
				setSubmitting(false);
			});
	};

	// Helper for star input
	const renderStarInput = () => (
		<div style={{ margin: "8px 0" }}>
			{[1, 2, 3, 4, 5].map((star) => (
				<span
					key={star}
					onClick={() => setReviewStars(star)}
					style={{
						cursor: "pointer",
						color: star <= reviewStars ? "#FFD700" : "#ccc",
						fontSize: 22,
						marginRight: 2
					}}
					aria-label={`${star} star${star > 1 ? 's' : ''}`}
				>
					<i className={star <= reviewStars ? "fas fa-star" : "far fa-star"}></i>
				</span>
			))}
			<span style={{ marginLeft: 8, color: "#666" }}>{reviewStars} / 5</span>
		</div>
	);

	// Compute average rating from stars array
	const avgRating = stars.length > 0
		? (stars.reduce((a, b) => a + b, 0) / stars.length)
		: (guide.rating || 4.8);

	// Show only 3 best rating reviews
	const bestReviews = [...reviews]
		.filter(r => typeof r.stars === "number")
		.sort((a, b) => b.stars - a.stars)
		.slice(0, 3);

	return (
		<div className={`guide-modal-overlay active`} onClick={onClose}>
			<div className="guide-modal-content" onClick={(e) => e.stopPropagation()}>
				<span className="close-guide-btn" onClick={onClose}>
					&times;
				</span>
				<div className="profile-header">
					<img
						src={guide.pic}
						alt={`Portrait of ${guide.name}`}
						className="profile-pic-large"
					/>
					<div className="profile-info">
						<h2 className="profile-name">{guide.name}</h2>
						<p className="profile-specialty">{guide.specialty}</p>
						<StarRating rating={avgRating} />
					</div>
				</div>
				<h3 className="section-heading">About Me</h3>
				<p className="profile-bio-text">{guide.bio}</p>
				<h3 className="section-heading">Experience & Qualifications</h3>
				<ul className="details-list">
					<li>
						<i className="fas fa-calendar-alt"></i>{" "}
						<strong>Years Guiding:</strong>{" "}
						<span>{guide.years}</span>
					</li>
					<li>
						<i className="fas fa-route"></i>{" "}
						<strong>Tours Completed:</strong>{" "}
						<span>{guide.tours}</span>
					</li>
					<li>
						<i className="fas fa-award"></i>{" "}
						<strong>Certifications:</strong>{" "}
						<span>{guide.certifications}</span>
					</li>
					<li>
						<i className="fas fa-language"></i>{" "}
						<strong>Languages Spoken:</strong>{" "}
						<span>{guide.languages}</span>
					</li>
					<li>
						<i className="fas fa-phone-alt"></i>{" "}
						<strong>Contact:</strong>{" "}
						<span>{guide.contact}</span>
					</li>
					<li>
						<i className="fas fa-envelope"></i>{" "}
						<strong>Email:</strong>{" "}
						<span>{guide.email}</span>
					</li>
				</ul>
				{/* Reviews Section */}
				{bestReviews && bestReviews.length > 0 && (
					<div className="guide-reviews" style={{ marginTop: 24 }}>
						<h3 className="section-heading">Reviews</h3>
						<ul style={{ paddingLeft: 0, listStyle: "none" }}>
							{bestReviews.map((review, idx) => (
								<li key={idx} style={{ marginBottom: 10, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
									<strong>{review.user}:</strong>{" "}
									<span style={{ color: "#FFD700", marginRight: 4 }}>
										{[...Array(review.stars)].map((_, i) => (
											<i key={i} className="fas fa-star"></i>
										))}
										{[...Array(5 - review.stars)].map((_, i) => (
											<i key={i} className="far fa-star"></i>
										))}
									</span>
									<span>{review.comment}</span>
								</li>
							))}
						</ul>
					</div>
				)}
				{/* Review Submission */}
				<form onSubmit={handleReviewSubmit} style={{ marginTop: 18 }}>
					<label htmlFor="review-user" style={{ fontWeight: 600, color: "#238b45" }}>Your Name:</label>
					<input
						id="review-user"
						type="text"
						value={reviewUser}
						onChange={e => setReviewUser(e.target.value)}
						style={{ width: "100%", margin: "8px 0", borderRadius: 4, padding: 8, border: "1px solid #ccc" }}
						placeholder="Your name"
						disabled={submitting}
						required
					/>
					<label htmlFor="review-stars" style={{ fontWeight: 600, color: "#238b45" }}>Your Rating:</label>
					{renderStarInput()}
					<label htmlFor="review-input" style={{ fontWeight: 600, color: "#238b45" }}>Add a Review:</label>
					<textarea
						id="review-input"
						value={reviewText}
						onChange={e => setReviewText(e.target.value)}
						rows={2}
						style={{ width: "100%", margin: "8px 0", borderRadius: 4, padding: 8, border: "1px solid #ccc" }}
						placeholder="Share your experience..."
						disabled={submitting}
						required
					/>
					<button
						type="submit"
						disabled={submitting || !reviewText.trim() || !reviewUser.trim()}
						style={{
							background: "#238b45",
							color: "#fff",
							border: "none",
							borderRadius: 4,
							padding: "6px 18px",
							cursor: submitting ? "not-allowed" : "pointer",
							fontWeight: 600
						}}
					>
						{submitting ? "Submitting..." : "Submit Review"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default function TourGuide() {
	const [modalGuide, setModalGuide] = useState(null);

	return (
		<div>
			<h1 className="page-heading">
				Meet Our <span>Tour Guides</span>
			</h1>
			<p className="page-des">
				Discover the best of your destination with our experienced and
				knowledgeable local tour guides. Each guide brings unique insights and
				passions to ensure your trip is unforgettable.
			</p>

			<div className="tour-guides-grid">
				{guides.map((g) => (
					<div className="guide-card" key={g.id}>
						<div className="guide-image-container">
							<img
								src={g.img}
								alt={`Tour Guide ${g.name}`}
								className="guide-profile-pic"
							/>
							<div className="guide-image-overlay">
								<span className="guide-image-name">{g.name}</span>
								<span className="guide-image-specialty">{g.specialty}</span>
							</div>
						</div>
						<div className="guide-content">
							<div>
								<StarRating rating={g.rating} />
								<h3 className="guide-name">{g.name}</h3>
								<p className="guide-specialty">{g.specialty}</p>
								<p className="guide-languages">
									<i className="fas fa-globe"></i> {g.languages}
								</p>
								<p className="guide-bio">{g.bio}</p>
							</div>
							<button
								className="guide-button"
								onClick={() => setModalGuide(g.modal)}
							>
								Connect with {g.name.split(" ")[0]}
							</button>
						</div>
					</div>
				))}
			</div>

			{modalGuide && (
				<GuideModal guide={modalGuide} onClose={() => setModalGuide(null)} />
			)}

			<section className="footer" id="contact">
				<div className="container">
					<div className="footer-content">
						<h3>Contact Us</h3>
						<ul>
							<li>Email: mausam.subba@msu.edu.in</li>
							<li>Phone: +91 7076736294</li>
							<li>Address: Megyong, 737111 , West Sikkim, Sikkim</li>
						</ul>
					</div>
					<div className="footer-content">
						<h3>Quick Links</h3>
						<ul>
							<li>
								<a href="#home">home</a>
							</li>
							<li>
								<a href="#speciality">Services</a>
							</li>
							<li>
								<a href="#gallery">Gallery</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#reviews-section">Reviews</a>
							</li>
							<li>
								<a href="#contact">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="footer-content">
						<h3>Follow Us</h3>
						<ul className="social-icons">
							<li>
								<a href="https://www.instagram.com/__maasakh_musuk/">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/mausam-subba-a4b725285/">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								{/* Wrap multiple <span> in a fragment to fix adjacent JSX error */}
								<>
									<span>
										<i className="fab fa-youtube"></i>
									</span>
									<span>
										<i className="fab fa-whatsapp"></i>
									</span>
									<span>
										<i className="fab fa-pinterest"></i>
									</span>
								</>
							</li>
							<li>
								<a href="https://github.com/mausams/Introduction-to-Python2">
									<i className="fab fa-github"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<h1 className="credit">
					created by{" "}
					<span>
						<span>Mausam S</span>
					</span>{" "}
					| all rights are reserved
				</h1>
			</section>
		</div>
	);
}

