import React from 'react';
import linkedin from '../images/linkedin 1x1.svg';
import github from '../images/github 1x1.svg';
import behance from '../images/behance 1x1.svg';
import email from '../images/email 1x1.svg';
import './Footer.css';
function Footer() {
	return (
		<div className='icons'>
			<img className='small-logo' src={linkedin} />
			<img className='small-logo' src={github} />
			<img className='small-logo' src={behance} />
			<img className='small-logo' src={email} />
		</div>
	);
}
export default Footer;
