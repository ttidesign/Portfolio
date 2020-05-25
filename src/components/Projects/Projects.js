import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p3.png';

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
					<img className='project-img' src={p1} />
					<a href='https://tk-movies-search.herokuapp.com/'>
						<button className='view-project'>View Project</button>
					</a>
				</div>
			</div>
		</div>
	);
}
export default Projects;
