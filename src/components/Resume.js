import React from 'react';
// import profile from './images/profile.jpg'
import './Resume.css';

function Resume() {
	return (
		<div>
			<div className='header'>
				<div className='style-line'></div>
				<h6>RESUME</h6>
				{/* <img src={profile}/> */}
			</div>
			<div className='resume'>
				<div className='style-line'></div>
				<h6>PROJECTS (Winter 2019 – Present) </h6>
				<h5 className='title'>Portfolio Website </h5>
				<p>
					<li>
						Used HTML5 and CSS3 in conjunction with Adobe CC to plan and create
						the visual of my portfolio website
					</li>
					<li>
						Used Javascript, React and Bootraps to create components and
						interactions elements
					</li>
					<li>
						Used Git throughout the process for version control. Deployed on
						heroku
					</li>
				</p>
				<h5 className='title'> Virtual Tour Flashcards </h5>
				<p>
					<li>
						Created wireframes, cards’ image and contents using Sketch and
						AdobeCC
					</li>
					<li>
						Used HTML5/ CSS3/ Javascript to create the views and interactions of
						my virtual tour game
					</li>
					<li>
						Built the website with full functionality using vanilla Javascript
						that utilized first class functions and DOM manipulation
					</li>
					<li>
						Used Git for version control. Tested features on development branch.
						Deployed on github page.
						<a href='https://github.com/ttidesign/GA-Project-1'>Link to repo</a>
					</li>
				</p>
				<h5 className='title'> Movies Search </h5>
				<p>
					<li>
						Created wireframes, logo for the project using Sketch and Adobe CC
					</li>
					<li>
						Used React, Javascript HTML5, CSS3 to create the views and
						interactions of my website
					</li>
					<li>
						Built the app with full functionality using Reacts and other
						libraries, utilizing API calls to get data and display results on
						page
					</li>
					<li>
						Used Git for version control, tested on development branch. Deployed
						master branch on Heroku.
						<a href='https://github.com/ttidesign/GA-Project-2'>Link to repo</a>
					</li>
				</p>
				<h5 className='title'>Essential CRM </h5>
				<p>
					<li>
						Used MongoDB, Mongoose, Express and Node.js to build backend
						database for the website
					</li>
					<li>
						Built full C.R.U.D functionality for backend with minimal endpoints,
						use jwt-token for authentication and authorization
					</li>
					<li>
						Used React and Bootstrap for frontend components and interaction
						elements. Used Postman to test endpoint and routes
					</li>
					<li>
						Backend hosted online on MongoDB Atlas, frontend hosted online on
						Heroku.
						<a href='https://github.com/statst/Group-project-CRM-backened'>
							Link to repo
						</a>
					</li>
				</p>
				<h5 className='title'> (Project 4)</h5>
				<div className='style-line'></div>
				<h6>SKILLS</h6>
				<p>SOFTWARE DEVELOPMENT</p>
				<p>
					Javascript, React, Python, Express, Node.js, MongoDB, Django, SQL,
					Bootstrap, HTML5, CSS3, Postman.
				</p>
				<p>PRODUCT DESIGNER</p>
				<p>
					Product / Industrial Design, Graphic Design, Visual Design, Web
					Design, Interaction Design, Digital Design, Logo/Icon Design, UI/UX,
					User Centric Design, User Research, Storyboarding, Rapid
					Visualization, Concept Development, Design Presentation, Wireframing,
					Prototyping, Information Architecture, User Flow, Task Flow, Sitemap,
					Sketching, Typography, Layout, Brand Identity
				</p>
				<div className='style-line'></div>
				<h6>PROFESSIONAL EXPERIENCE</h6>
				<h5 className='title'> Product Designer</h5>
				<p className='company'> Freelance | 2016-Present </p>
				<p>
					<li>
						Client-Amtecol: Design brochure/catalogue/flyers/packagings/labels
						for the client, helped to establish brand image
					</li>
					<li>
						Client-Nuu-Beside-You: Design logo and website for the client,
						helped to establish brand identity
					</li>
					<li>Client-AnEmotion: Logo design </li>
				</p>
				<h5 className='title'> Senior Product Designer</h5>
				<p className='company'>Z-Line Design Inc | Dec 2018 - Sep 2019 </p>
				<p>
					<li>
						Designed and engineered RTA home and office furniture; researched
						trends, developed products for new markets, and brought them to mass
						production
					</li>
					<li>
						Increased market share 15% by successfully designing and introducing
						new furniture products for Amazon, Walmart, Staples, Costco,
						BestBuy, Target, Conns, and other retailers
					</li>
					<li>
						Designed new furniture products which had a major impact in bringing
						Disney on board and significant revenue increases
					</li>
					<li>
						Improved work efficiency by 25% by building a CMF library in KeyShot
						for use in ongoing/future products
					</li>
					<li>
						Key contributor of new concepts to support marketing teams and
						improve sales by 15%
					</li>
				</p>
				<h5 className='title'> Lead Product Designer</h5>
				<p className='company'>Magico LLC | Mar 2013 - Dec 2018 </p>
				<p>
					<li>
						Designed/engineered/built/tested loudspeakers from concept
						development to final production; initiated and led design review
						meetings with cross-functional teams, providing solutions to
						technical problems in design and manufacturing
					</li>
					<li>
						Researched and implemented different materials and manufacturing
						processes to optimize functionality and increase manufacturing speed
						by 50%; created assembly guidelines and trained assemblers for
						optimal efficiency
					</li>
					<li>
						Reduced production process time 30% by implementing practical
						changes to design for manufacturing approaches
					</li>
					<li>
						Created FAI documentation and QA guidelines; collaborated with
						domestic and international vendors to establish these guidelines,
						ensure product quality, and reduce parts rejection/delay
					</li>
				</p>
				<div className='style-line'></div>
				<h6>EDUCATION</h6>
				<h5 className='title'> General Assembly</h5>
				<p> Software Engineer Immersive</p>
				<h5 className='title'> San Jose State University | San Jose CA </h5>
				<p> B.S - Industrial Design - University Academic Honor Award </p>
				<h5 className='title'> Evergreen Valley College | San Jose CA </h5>
				<p> A.A - Design Emphasis</p>
			</div>
		</div>
	);
}
export default Resume;
