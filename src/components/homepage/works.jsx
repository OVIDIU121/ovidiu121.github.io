import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./amazon.png"
								alt="amazon"
								className="work-image"
							/>
							<div className="work-title">Amazon Flex</div>
							<div className="work-subtitle">
							Delivery driver	
							</div>
							<div className="work-duration">2021 - present</div>
						</div>
						<div className="work">
							<img
								src="./wincanton.png"
								alt="wincanton"
								className="work-image"
							/>
							<div className="work-title">Wincanton PLC</div>
							<div className="work-subtitle">
							Inventory and process clerk
							</div>
							<div className="work-duration">2017 - 2021</div>
						</div>						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
