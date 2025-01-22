import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import tmtScreen from "../images/TMT_scrn_b.png";
import kadena from "../images/kd_site.png";
import zmbScreen from "../images/zombie.png";
import CM_screen from "../images/cm_site.png";
import Hiredmain from "../images/hired_site.png";
import RDTmain from "../images/RDT_main2.png";
import code from "../images/code312.org_.png";
import STL from "../images/STL1.png";
import LkIn from "../images/LIInBug.png";
import email from "../images/email.png";
import git from "../images/github-mark-white.png";
import jsAltPic from "../images/Scarpelli-Jon-007.png";

const Main = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		rootMargin: "-100px 0px",
	});

	return (
		<div className="main-div">
			<section>
				<div ref={ref} className={`icons ${inView ? "slide-in" : "fade-out"}`}>
					<a href="https://www.linkedin.com/in/jon-scarpelli/" target="blank">
						<img alt="linkd-tag" src={LkIn} className="icon lnk-ico" />
					</a>
					<a href="mailto:scarpelli.jon@gmail.com" target="blank">
						<img alt="mail-tag" src={email} className="icon main-ico" />
					</a>
					<a href="https://github.com/jscarpelli3" target="blank">
						<img alt="git-tag" src={git} className="icon git-ico" />
					</a>
				</div>
				<div className="greeting">
					<div
						ref={ref}
						className={`prof-pic-container ${
							inView ? "slide-in-left" : "fade-out"
						}`}>
						<img alt="prof-pic" className="prof-pic" src={jsAltPic}></img>
						<div className="more-about">
							<a
								// href="https://docs.google.com/document/d/1KbWnjjg87i8NoC606kQUP7mL6Xc_cypK97-PoUA7ThE/preview?usp=sharing"
								href="https://docs.google.com/document/d/1T7ce6dG-sm8dipoUAQRGa4rKXJ9MYJftEd0W3eq_5Oc/preview?usp=sharing"
								target="blank">
								<h3 className="view-res">VIEW MY RESUME</h3>
							</a>
						</div>
					</div>
					<div
						ref={ref}
						className={`greeting-info ${inView ? "fade-in" : "fade-out"}`}>
						<h1 className="hello">hello, i'm</h1>
						<h2 className="name">Jon Scarpelli</h2>
						<h3 className="titles">
							Software Developer | Musician | Game Designer
						</h3>
						<p className="about">
							I am a software engineer with a passion for creative problem
							solving and intuitive design. Prior to transitioning to the tech
							space, I spent my career as a professional musician, music teacher
							and recording engineer. I value collaboration and teamwork to
							ensure high quality client service, detail-oriented deliverables
							and clear communication strategies.
						</p>
						<div className="more-container">
							<Link to="/about-me">
								<h4 className="more">...click for bio</h4>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<h2 className="p-title">Projects</h2>
			<div className="project-grid">
				<div className="project">
					<Project
						icons={["sanity", "next", "ts", "tailwind", "vercel"]}
						title={"Kadena"}
						thumb={kadena}
						cap={
							"Contracted as part of a design and dev team to build a fullstack web app for a blockchain startup."
						}
						cap2={
							"Built front and back end components as well as implemented Sanity.io components and Presentation Tool    "
						}
						href={"https://www.kadena.io/"}
						thumbAlt={"Screenshot"}
					/>
				</div>
				<div className="project">
					<Project
						icons={[
							"gatsby",
							"sanity",
							"graphql",
							"js",
							"css",
							"html",
							"netlify",
						]}
						title={"Code312 (Code for Chicago)"}
						thumb={code}
						cap={
							"Built and refactored components for a Gatsby.JS front end and Sanity.io Backend. Deployed with Netlify."
						}
						cap2={"Implemented GRAPHQL queries to pull data from Sanity CMS."}
						href={"https://www.code312.org/"}
						thumbAlt={"Screenshot"}
						git={"https://github.com/Code-For-Chicago/code-for-chicago-gatsby"}
					/>
				</div>
				<div className="project">
					<Project
						icons={[
							"gatsby",
							"sanity",
							"graphql",
							"js",
							"css",
							"html",
							"netlify",
						]}
						title={"St. Laurence High School"}
						thumb={STL}
						cap={
							"Rebuilt and refactored the CMS moving from Wordpress to Sanity.io"
						}
						cap2={"Refactored Gatsby.JS front end. Deployed with Netlify. "}
						href={"https://www.stlaurence.com/"}
						thumbAlt={"Screenshot"}
						git={"https://github.com/geletkaplus/stlaurence"}
						git2={"https://github.com/geletkaplus/STL_Sanity"}
					/>
				</div>
				<div className="project">
					<Project
						icons={["vue", "postgql", "express", "js", "css", "html"]}
						title={"RockDog Trivia!"}
						thumb={RDTmain}
						cap={"A mobile-styled competitive music trivia app"}
						// href={"https://rockdogtrivia.web.app/"}
						href={"#"}
						thumbAlt={"Screenshot"}
						cap2={
							"Meant for mobile devices & features hand-rolled auth and a 3rd party API"
						}
						git={"https://github.com/jscarpelli3/rockdog-trivia"}
						git2={"https://github.com/jscarpelli3/rockdog-trivia-backend"}
					/>
				</div>
				<div className="project">
					<Project
						icons={["js", "html", "css"]}
						title={"The Maze Tower"}
						thumb={tmtScreen}
						cap={"A maze adventure game in the style of 80's MS-DOS Freeware"}
						href={"https://the-maze-tower.surge.sh/"}
						thumbAlt={"Screenshot"}
						cap2={
							"An original HTML5 game design featuring a level-creation tool for players to create new gameplay and include it in the base level pack."
						}
						git={"https://github.com/jscarpelli3/Jon-Scarpelli_The-Maze-Tower"}
					/>
				</div>
				{/* <div className="project">
					<Project
						icons={["react", "postgql", "express", "js", "css", "html"]}
						expressCk
						reactCk
						jsCk
						cssCk
						postgCk
						htmlCk
						title={"Hired"}
						thumb={Hiredmain}
						cap={"A hiring app for bandleaders looking for musicians"}
						href={"https://hiredgig.herokuapp.com"}
						thumbAlt={"Screenshot"}
						cap2={"Includes hand-rolled auth"}
						git={"https://github.com/jscarpelli3/Hired"}
						git2={"https://github.com/jscarpelli3/GitaGig-ServerSide"}
					/>
				</div> */}
				{/* <div className="project">
          <Project
            icons={['react', 'mongo', 'express', 'js', 'css', 'html']}
            title={"ResRecs"}
            thumb={RRmain}
            cap={"A restaurant recommendation app for small groups"}
            cap2={"note: server code lives in the same Git repo as the client"}
            href={"https://resrecs.herokuapp.com"}
            thumbAlt={"Screenshot"}
            git={"https://github.com/jscarpelli3/ResRecs"}
            git2Check={false}
          />
        </div> */}
				{/* <div className="project">
					<Project
						icons={["python"]}
						title={"Python Adventure"}
						thumb={zmbScreen}
						cap={"A 'Choose Your Own Adventure' written in Python"}
						href={"https://replit.com/@jscarpelli3/zombie-text-adventure"}
						thumbAlt={"Screenshot"}
						cap2={"Text-only & features 8 different endings."}
						git={"https://github.com/jscarpelli3/zombie-text-adventure"}
					/>
				</div> */}
				<div className="project">
					<Project
						icons={["gatsby", "graphql", "js", "css", "html", "firebase"]}
						reactCk
						jsCk
						cssCk
						htmlCk
						gatsbyCk
						title={"Century Mallets"}
						thumb={CM_screen}
						cap={
							"Developed web app based on design specs and content from client."
						}
						href={"https://centurymallet.com/"}
						thumbAlt={"Screenshot"}
						cap2={
							"Leveraged Firebase server functions to generate customer emails to client without an emailer service."
						}
						git={"https://github.com/jscarpelli3/century-bautista"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
