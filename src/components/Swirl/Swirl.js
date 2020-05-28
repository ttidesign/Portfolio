import React from 'react';
import { Link } from 'react-router-dom';
import swirl from '../images/Swirl app presentation.png';
import './Swirl.css';
import home from '../images/home1x1.svg';
import arrow from '../images/arrow1x1.svg';
function Swirl() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p className='brief'>
				Swirl is an UX/UI Project focus on simple interaction while presenting
				something unique to the user. Easy navigation through screens with
				spin-able controller, user can spend few minutes setup their custom
				drinks and add them to their favorite list to order later on.{' '}
			</p>
			<div className='presentation'>
				<img
					className='image-presentation'
					src={swirl}
					alt='swirl-project-presentation'
				/>
			</div>
			<div className='bottom-nav'>
				<Link to='/' title='back to home page'>
					<img src={home} className='small-icon' alt='link to home page' />
				</Link>
				<Link to='/trade' title='next project'>
					<img src={arrow} className='small-icon' alt='link to next project' />
				</Link>
			</div>
		</div>
	);
}

export default Swirl;
