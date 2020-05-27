import React from 'react';
import trade from '../images/trading app presentation 3.png';
import './Trade.css';

function Trade() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p className='brief'>
				Trade is an UX/UI project focus on easy navigation and interaction.
				Beside its explore feature, where users can view stocks and
				cryptocurrencies, Trade focused on efficiency of navigation through
				screens. In an instance where profitable trades need to happen
				instantly, it's important to make navigation as easy and efficient as
				possible. The functional prototype can be viewed <a href='' target='blank'>here </a>
			</p>
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
