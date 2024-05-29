import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./amazon.png"
								alt="Roehampton"
								className="work-image"
							/>
							<div className="work-title">Roehampton University</div>
							<div className="work-subtitle">
							Computing Technologies 	
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>
						<div className="work">
							<img
								src="./wincanton.png"
								alt="Independenta"
								className="work-image"
							/>
							<div className="work-title">Independenta National College</div>
							<div className="work-subtitle">
							Baccalaureate Diploma / GCSE Equivalent
							</div>
							<div className="work-duration">2006 - 2010</div>
						</div>						
					</div>
				}
			/>
		</div>
	);
};

export default Education;
