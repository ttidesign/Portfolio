import React from 'react';
import trade from '../images/trading app presentation 3.png';
import './Trade.css';

function Trade() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p>Trade is a project</p>
			<div className='presentation'>
				<img
					className='image-presentation'
					src={trade}
					alt='trade-project-presentation'
				/>
			</div>
		</div>
	);
}
export default Trade;
