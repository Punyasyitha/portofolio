# Masyitha's Portfolio 👩‍💻

This is my personal portfolio website, built with React based on the [Reactfolio](https://github.com/truethari/reactfolio) template. It showcases my background as a **Web Developer** with a growing interest in **Data & Analytics**, including my projects, experiences, and skills.

Live site: <a href="https://punyasyitha.github.io/portofolio" target="_blank">punyasyitha.github.io/portofolio</a>

- [Masyitha's Portfolio 👩‍💻](#masyithas-portfolio-)
  - [🙋‍♀️ About](#️-about)
  - [📙 Features](#-features)
  - [📚 Getting Started](#-getting-started)
  - [🛠 Installation and Setup Instructions](#-installation-and-setup-instructions)
  - [📁 Folder Structure](#-folder-structure)
  - [⚙️ Configurations](#️-configurations)
  - [🚀 Building the React App](#-building-the-react-app)
  - [🌐 Deployment](#-deployment)
  - [🙏 Credits](#-credits)

## 🙋‍♀️ About

I'm a Bachelor's graduate in Informatics Engineering with a background in web application development using Laravel, along with experience building and testing API integrations using Postman. I deepened my interest in data through my final project, an Aspect-Based Sentiment Analysis (ABSA) on an Internet Service Provider company using a BERT model and clause segmentation. This portfolio highlights my journey and the projects I've worked on.

## 📙 Features

-   📖 Multi-Page Layout
    -   Home
    -   About
    -   Projects
    -   Experiences
    -   Contact
-   📱 Fully Responsive
-   🛠 Easy configurations

## 📚 Getting Started

Clone down this repository. You will need `NodeJS` and `git` installed globally on your machine.

```bash
git clone https://github.com/Punyasyitha/portofolio.git
cd portofolio
```

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. Run the project: `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## 📁 Folder Structure

-   `/public`: publicly accessible contents (ex: images, media).
-   `/src`: all the components used in this project.
    -   `/src/components/`: reusable components for each page.
    -   `/src/data`: configuration of the web app (content, SEO, styles).
    -   `/src/pages`: pages included in the web app.

## ⚙️ Configurations

All personal content (bio, projects, experiences, contact info) is managed in:

Directory: `/src/data/`

-   `user.js` — content for each page of the website.
-   `seo.js` — SEO metadata (title, description, keywords) per page.
-   `styles.css` — theme colors and font families.

```css
:root {
	/* ------- colors ------- */
	--primary-color: #27272a;
	--secondary-color: #65656d;
	--tertiary-color: #acacb4;
	--quaternary-color: #e4e4e7;
	--link-color: #14b8a6;
	/* ---------------------- */

	/* ------- fonts ------- */
	--primary-font: "Heebo", sans-serif;
	--secondary-font: "Roboto", sans-serif;
	/* --------------------- */
}
```

## 🚀 Building the React App

To create a production-ready build:

```bash
npm run build
```

This generates a static bundle of the app inside the `build/` directory.

## 🌐 Deployment

This project is deployed using **GitHub Pages** via the `gh-pages` package.

```bash
npm install gh-pages --save-dev
npm run deploy
```

Make sure `homepage` is set correctly in `package.json`:

```json
"homepage": "https://punyasyitha.github.io/portofolio"
```

And the following scripts are added:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

After deploying, enable GitHub Pages in your repo settings:
`Settings > Pages > Branch: gh-pages > / (root)`

## 🙏 Credits

This portfolio is based on the [Reactfolio](https://github.com/truethari/reactfolio) template created by [Tharindu Nayanajith](https://github.com/truethari). Content, structure, and configurations have been personalized to reflect my own background and work.