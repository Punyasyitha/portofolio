import React from "react";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faCertificate}
				title="Certificates"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">
								Participation of IES 2026
							</div>
							<div className="work-subtitle">IEEE Indonesia Section & PENS</div>
							<div className="work-duration">2026</div>
						</div>

						<div className="work">
							<div className="work-title">
								Kementrian Hukum Republik Indonesia 
							</div>
							<div className="work-subtitle">SafeShield</div>
							<div className="work-duration">2025</div>
						</div>

						<div className="work">
							<div className="work-title">
								IBM Data Analytics
							</div>
							<div className="work-subtitle">Introduction to Data Analytics</div>
							<div className="work-duration">2025</div>
						</div>

						<div className="work">
							<div className="work-title">
								BNSP
							</div>
							<div className="work-subtitle">Certificate of Competence in Data Scientist</div>
							<div className="work-duration">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;