import React from 'react';
import { Link } from 'react-router-dom';
import nuu from '../images/nuu-presentation.png';
import home from '../images/home1x1.svg';
import arrow from '../images/arrow1x1.svg';

function Nuu() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p className='brief'>
				This is a Web/UX design project I did for one of my clients where I designed the logo and overall look of the website, pages transition and interaction. I used Figma for design and testing functionality. The client decided not to move forward as she try to establish her brand via social medias and wanted to focus on social media advertising first. My next goal on this project is to make it functional using React. 
			</p>
			<div className='presentation'>
				<img
					className='image-presentation'
					src={nuu}
					alt='nuu-project-presentation'
				/>
			</div>
			<div className='bottom-nav'>
				<Link to='/' title='back to home page'>
					<img src={home} className='small-icon' alt='link to home page' />
				</Link>
				<Link to='/swirl' title='next project'>
					<img src={arrow} className='small-icon' alt='link to next project' />
				</Link>
			</div>
		</div>
	);
}
export default Nuu;
