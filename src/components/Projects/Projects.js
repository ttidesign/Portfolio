import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p3.png';
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
				<div className='project-container'>
					<img className='project-img' src={p1} />
					<a href='https://ttidesign.github.io/GA-Project-1'>
						<button className='view-project'>View Project</button>
					</a>
				</div>
				<div className='project-container'>
					<img className='project-img' src={p2} />
					<a href='https://tk-movies-search.herokuapp.com/'>
						<button className='view-project'>View Project</button>
					</a>
				</div>
			</div>
			<div className='project-images-container'>
				<div className='project-container'>
					<img className='project-img' src={p3} />
					<a href='https://ttidesign.github.io/GA-Project-1'>
						<button className='view-project'>View Project</button>
					</a>
				</div>
				<div className='project-container'>
					<img className='project-img' src={p4} />
					<a href='https://tk-movies-search.herokuapp.com/'>
						<button className='view-project'>View Project</button>
					</a>
				</div>
			</div>
			<div className='project-images-container-2'>
				<div className='project-container-2'>
					<img className='project-img-2' src={p6} />
					<a href='https://ttidesign.github.io/GA-Project-1'>
						<button className='view-project-2'>View Project</button>
					</a>
				</div>
				<div className='project-container-2'>
					<img className='project-img-2' src={p8} />
					<a href='https://ttidesign.github.io/GA-Project-1'>
						<button className='view-project-2'>View Project</button>
					</a>
				</div>
				<div className='project-container-2'>
					<img className='project-img-2' src={p7} />
					<a href='https://ttidesign.github.io/GA-Project-1'>
						<button className='view-project-2'>View Project</button>
					</a>
				</div>
			</div>
		</div>
	);
}
export default Projects;
