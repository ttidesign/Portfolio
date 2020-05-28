import React from 'react';
import { Link } from 'react-router-dom';
import trade from '../images/trading app presentation.png';
import home from '../images/home1x1.svg';
import arrow from '../images/arrow1x1.svg';
import './Trade.css';

function Trade() {
	return (
		<div>
			<div className='style-line'></div>
			<h6>PROJECT BRIEF</h6>
			<p className='brief'>
				Trade is an UX/UI project focused on easy navigation and interaction.
				Beside its explore feature, where users can view stocks and
				cryptocurrencies, Trade focused on efficiency of navigation through
				screens. In an instance where profitable trades need to happen
				instantly, it's important to make navigation as easy and efficient as
				possible. The functional prototype is done in Invision and can be viewed{' '}
				<a href='https://invis.io/NCVJZ1QBFQH#/399436921_Trade' target='blank'>
					here{' '}
				</a>
			</p>
			<div className='presentation'>
				<img
					className='image-presentation'
					src={trade}
					alt='trade-project-presentation'
				/>
			</div>
			<div className='bottom-nav'>
				<Link to='/' title='back to home page'>
					<img src={home} className='small-icon' alt='link to home page' />
				</Link>
				<Link to='/nuu' title='next project'>
					<img src={arrow} className='small-icon' alt='link to next project' />
				</Link>
			</div>
		</div>
	);
}
export default Trade;
