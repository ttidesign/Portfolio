import React from 'react';
import linkedin from '../images/linkedin 1x1.svg';
import github from '../images/github 1x1.svg';
import behance from '../images/behance 1x1.svg';
import email from '../images/email 1x1.svg';
import './Footer.css';
function Footer() {
	return (
		<div className='icons'>
			<a href='https://www.linkedin.com/in/tuongknguyen/' target='blank'>
				<img className='small-logo' src={linkedin} alt='linkedin logo' />
			</a>
			<a href='https://github.com/ttidesign' target='blank'>
				<img className='small-logo' src={github} alt='github logo' />
			</a>
			<a href='https://www.behance.net/KTDesign' target='blank'>
				<img className='small-logo' src={behance} alt='behance logo' />
			</a>
			<img
				className='small-logo'
				src={email}
				alt='mailto:tkthedesigner@gmail.com'
			/>
		</div>
	);
}
export default Footer;
