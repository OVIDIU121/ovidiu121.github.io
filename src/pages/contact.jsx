import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in reaching out to me. I welcome your feedback, questions, and suggestions. I strive to respond to all messages within 24 hours, although it may take me longer during busy periods. Additionally, if you prefer to connect on social media, you can find me on&nbsp;
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								LinkedIn
							</a>
							&nbsp;or&nbsp;
							<a href={INFO.socials.github} target="_blank" rel="noreferrer">
								GitHub
							</a>
							. I regularly share updates and engage with my network there, so feel free to connect with me. Once again, thank you for your interest, and I'm looking forward to hearing from you!
						</div>

					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
