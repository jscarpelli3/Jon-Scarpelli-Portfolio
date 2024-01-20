import React from "react";
import { useInView } from "react-intersection-observer";
import gitIcn from "../images/github-mark-white.png";
import * as SiIcons from "react-icons/si";

const Project = ({
	title,
	thumb,
	cap,
	thumbAlt,
	href,
	cap2,
	git,
	git2,
	icons,
}) => {
	const { ref, inView } = useInView({
		threshold: 0,
		rootMargin: "-100px 0px",
	});

	const iconMap = {
		css: { cmp: SiIcons.SiCss3, name: "CSS3" },
		html: { cmp: SiIcons.SiHtml5, name: "HTML5" },
		gatsby: { cmp: SiIcons.SiGatsby, name: "Gatsby" },
		python: { cmp: SiIcons.SiPython, name: "Python" },
		vue: { cmp: SiIcons.SiVuedotjs, name: "Vue.js" },
		react: { cmp: SiIcons.SiReact, name: "React" },
		express: { cmp: SiIcons.SiExpress, name: "Express.js" },
		postgql: { cmp: SiIcons.SiPostgresql, name: "PostgreSQL" },
		mongo: { cmp: SiIcons.SiMongodb, name: "MongoDB" },
		js: { cmp: SiIcons.SiJavascript, name: "JavaScript" },
		next: { cmp: SiIcons.SiNextdotjs, name: "Next.js" },
		ts: { cmp: SiIcons.SiTypescript, name: "TypeScript" },
		sanity: { cmp: SiIcons.SiSanity, name: "Sanity" },
		vercel: { cmp: SiIcons.SiVercel, name: "Vercel" },
		tailwind: { cmp: SiIcons.SiTailwindcss, name: "Tailwind" },
		netlify: { cmp: SiIcons.SiNetlify, name: "Netlify" },
		firebase: { cmp: SiIcons.SiFirebase, name: "Firebase" },
    graphql: { cmp: SiIcons.SiGraphql, name: "GraphQL" },
	};

	return (
		<div
			className={`project-card ${inView ? "slide-in" : "fade-out"}`}
			ref={ref}>
			<h1 className="project-title">{title}</h1>
			<div className="project-image-container">
				<a target="blank" href={href}>
					<img className="project-thumbAlt square" alt={thumbAlt} src={thumb} />
				</a>
			</div>

			{git || git2 ? (
				<div className="repo-area">
					{git && (
						<div className="git-card">
							<a className="git-txt" href={git}>
								<img alt="icn" className="icon" src={gitIcn} />
								<br />
								FrontEnd
							</a>
						</div>
					)}
					{git2 && (
						<div className="git-card">
							<a className="git-txt" href={git2}>
								<img alt="icn" className="icon" src={gitIcn} /> <br />
								BackEnd
							</a>
						</div>
					)}
				</div>
			) : (
				<h3 className="no-repo italic repo-area">
					unfortunately this repo is private.
				</h3>
			)}
			<div className="proj-details">
				<div className="captions">
					<p className="caption">{cap}</p>
					<p className="caption">{cap2}</p>
				</div>
				<div className="tech-box">
					{icons &&
						icons.map((iconName, index) => {
							const Icon = iconMap[iconName].cmp;

							if (Icon) {
								return (
									<div className="tech-list-item" key={index}>
										<Icon className="t-icon" />
										<span className="tech-tag">{iconMap[iconName].name}</span>
									</div>
								);
							} else {
								console.error(`Icon ${iconName} not found`);
								return null;
							}
						})}
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Project;
