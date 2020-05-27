import React from 'react';
import swirl from '../images/Swirl app presentation 4.png';
import './Swirl.css';

function Swirl() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p className='brief'>Swirl is an UX/UI Project focus on simple interaction while presenting something unique to the user. Easy navigation through screens with spin-able controller, user can spend few minutes setup their custom drinks and add them to their favorite list to order later on. </p>
			<div className='presentation'>
				<img
					className='image-presentation'
					src={swirl}
					alt='swirl-project-presentation'
				/>
			</div>
		</div>
	);
}

export default Swirl;
