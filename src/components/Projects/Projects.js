import React from 'react';
import { Link } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';
import './Projects.css';

function Projects() {
	return (
		<div className='project-wrapper'>
			<div className='header'>
				<div className='style-line'></div>
				<h6>MY RECENT WORK</h6>
			</div>
			<div className='project-images-container'>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container'>
						<img className='project-img' src={p1} alt='project1-screenshot' />
						<a href='https://ttidesign.github.io/GA-Project-1' target='blank'>
							<button className='view-project'>View Project</button>
						</a>
					</div>
				</MDBAnimation>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container'>
						<img className='project-img' src={p2} alt='project2-screenshot' />
						<a href='https://tk-movies-search.herokuapp.com/' target='blank'>
							<button className='view-project'>View Project</button>
						</a>
					</div>
				</MDBAnimation>
			</div>

			<div className='project-images-container'>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container'>
						<img className='project-img' src={p3} alt='project3-screenshot' />
						<a href='https://essentialcrm.herokuapp.com/' target='blank'>
							<button className='view-project'>View Project</button>
						</a>
					</div>
				</MDBAnimation>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container'>
						<img className='project-img' src={p4} alt='project4-screenshot' />
						<a href='https://swirl-project.herokuapp.com/' target='blank'>
							<button className='view-project'>View Project</button>
						</a>
					</div>
				</MDBAnimation>
			</div>
			<div className='project-images-container-2'>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container-2'>
						<img className='project-img-2' src={p6} alt='project6-screenshot' />
						<Link to='/trade'>
							<button className='view-project-2'>View Project</button>
						</Link>
					</div>
				</MDBAnimation>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container-2'>
						<img className='project-img-2' src={p8} alt='project8 screenshot' />
						<Link to='/nuu'>
							<button className='view-project-2'>View Project</button>
						</Link>
					</div>
				</MDBAnimation>
				<MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
					<div className='project-container-2'>
						<img className='project-img-2' src={p7} alt='project7-screenshot' />
						<Link to='/swirl'>
							<button className='view-project-2'>View Project</button>
						</Link>
					</div>
				</MDBAnimation>
			</div>
		</div>
	);
}
export default Projects;
