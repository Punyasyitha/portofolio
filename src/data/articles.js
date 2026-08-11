import React from "react";

function article_1() {
	return {
		date: "2 Agustus 2026",
		title: "Presenter & Author at International Symposium (IES) 2026",
		description:
			"Authored and presented research on a conjunction-based sentence segmentation mechanism for handling multi-opinion comments in informal Bahasa Indonesia.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.ies-photo {
					align-self: center;
					width: 100%;
					max-width: 600px;
					height: auto;
					border-radius: 8px;
					margin-bottom: 24px;
				}
				`,
		keywords: [
			"IES 2026",
			"International Symposium",
			"IEEE Xplore",
			"Aspect-Based Sentiment Analysis",
			"Research Paper",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={process.env.PUBLIC_URL + "/IES 2026.jpeg"}
						alt="IES 2026"
						className="ies-photo"
					/>
					<div className="paragraph">
						At the International Symposium (IES) 2026, I
						presented ISPLens, a web-based Aspect-Based Sentiment
						Analysis (ABSA) system I built to analyze customer
						opinions about Indonesian ISP services scraped from
						Instagram. The paper was accepted for presentation and
						will be indexed in IEEE Xplore.
					</div>
					<div className="paragraph">
						My research focused on a conjunction-based sentence
						segmentation mechanism applied at inference time to
						handle multi-opinion comments — a common challenge in
						informal Bahasa Indonesia, where a single sentence
						often expresses more than one aspect and sentiment at
						once. This mechanism allowed the model to identify
						exactly which aspect triggered which sentiment,
						rather than treating each comment as a single,
						undivided opinion.
					</div>
					<div className="paragraph">
						Presenting this work as both author and presenter to
						an international academic audience pushed me to
						communicate technical research clearly, defend my
						methodology under questioning, and see my project
						through an academic lens beyond just building a
						working system.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 July - 15 December 2024",
		title: "Intern at PT. Multi Spunindo Jaya TBK",
		description:
			"Interned at the Management Information System (MIS) division, where I designed database blueprints and built MSJ Rekap Tagihan using Laravel — handling both front-end and back-end development, including automatic price calculation logic for receipt transactions.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.internship-photo {
					align-self: center;
					width: 100%;
					max-width: 600px;
					height: auto;
					border-radius: 8px;
					margin-bottom: 24px;
				}
				`,
		keywords: [
			"Internship",
			"Laravel",
			"Management Information System",
			"MSJ Rekap Tagihan",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={process.env.PUBLIC_URL + "/Intern PT MSJ.jpeg"}
						alt="Internship at PT Multi Spunindo Jaya"
						className="internship-photo"
					/>
					<div className="paragraph">
						During my six-month internship at PT. Multi Spunindo
						Jaya TBK, I worked within the Management Information
						System (MIS) division, contributing to the
						development of MSJ Rekap Tagihan — a system built to
						streamline bill recap reporting and receipt
						transaction recording for the company's
						administration.
					</div>
					<div className="paragraph">
						My responsibilities included creating the database
						blueprint that defined the structure of every table
						the system needed to track, as well as designing the
						application's pages using Laravel across both
						front-end and back-end. I also implemented the
						automatic price calculation logic for receipt
						transactions, ensuring accurate tax and total billing
						computations that the company's staff could rely on
						daily.
					</div>
					<div className="paragraph">
						This experience pushed me to communicate clearly
						within a real professional environment, adapt to the
						company's existing workflows, and balance my
						technical decisions with practical business needs.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "August 2023 - September 2023",
		title: "LKMM Gandhiwa Guide",
		description:
			"Served as a member of the Technical Commission and facilitator at Gandhiwa, responsible for designing the LKMM event concept, drafting technical guidelines, leading on-ground execution, and co-delivering training materials to participants.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.lkmm-photo {
					align-self: center;
					width: 100%;
					max-width: 500px;
					height: auto;
					border-radius: 8px;
					margin-bottom: 24px;
				}
				`,
		keywords: [
			"Gandhiwa",
			"LKMM",
			"Leadership",
			"Technical Commission",
			"Facilitator",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={process.env.PUBLIC_URL + "/Pemandu Gandhiwa.jpeg"}
						alt="Gandhiwa Guide of LKMM"
						className="lkmm-photo"
					/>
					<div className="paragraph">
						As a member of Gandhiwa and part of the Technical
						Commission, I contributed to designing the concept
						for LKMM (Latihan Kepemimpinan dan Manajemen
						Mahasiswa), working closely with the Himpunan's BPH
						(Board of Executives) to align the event with the
						organization's leadership development goals.
					</div>
					<div className="paragraph">
						My responsibilities within the Technical Commission
						included drafting the Juknis (technical guidelines)
						and Juklak (implementation guidelines) that governed
						how each session of LKMM would run, as well as
						leading the execution on the ground to make sure
						every session went according to plan.
					</div>
					<div className="paragraph">
						Beyond planning, I also served as a facilitator,
						delivering LKMM training materials to participants
						alongside a co-facilitator for each session and
						room. This experience sharpened my ability to lead
						under real-time conditions, coordinate with a team
						toward a shared outcome, and communicate ideas
						clearly to a room full of participants.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;