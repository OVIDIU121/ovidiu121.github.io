import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/algorithms.css";

import MergeSortVisualizer from "../components/algorithms/MergeSortVisualizer";

const MergeSort = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "algorithms");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Algorithms | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="algorithms" />
				<div className="content-wrapper">
					<div className="algorithms-logo-container">
						<div className="algorithms-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="algorithms-container">
						<div className="title algorithms-title">
							Merge Sort Visualisation
						</div>

						<div className="subtitle algorithms-subtitle">
							Explore visualizations of various algorithms to
							understand their workings better.
						</div>
                        <br></br>

						<div className="algorithms-list">
							<MergeSortVisualizer />
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

export default MergeSort;
