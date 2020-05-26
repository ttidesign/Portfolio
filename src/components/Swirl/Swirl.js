import React from 'react';
import swirl from '../images/Swirl app presentation 4.png';
import './Swirl.css';

function Swirl() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p>Swirl is a project</p>
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
