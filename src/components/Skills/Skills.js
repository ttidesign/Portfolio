import React from 'react'
import design from '../images/design2.png'
import code from '../images/code2.png'
import {MDBAnimation} from 'mdbreact'

import './Skills.css' 
function Skills() {
    return (
			<>
				<div className='skills-wrapper'>
					<MDBAnimation type='fadeInLeft' duration='600ms' delay='0.3s'>
						<div id='apppage' className='skill-box'>
							<img src={code} alt='coding' />
							<div className='skill-box-text'>DEVELOPER</div>
							<span style={{ fontWeight: 'bold' }}>
								Stacks & Programing Languages
							</span>
							<span>
								{'\n'}Javascript, React, Python, Node.js, Express, Django
							</span>
							<div></div>
							<span style={{ fontWeight: 'bold' }}>
								{' '}
								{'\n'} Developer Tools
							</span>
							<span> {'\n'} HTML5 | CSS3</span>
							<span> {'\n'} Bootstrap | MDBootstrap</span>
							<span> {'\n'} MongoDB | Mongo Atlas | Mongoose</span>
							<span> {'\n'} PostgreSQL</span>
							<span> {'\n'} Codepen | Postman</span>
							<span> {'\n'} VSCode | Sublime Text</span>
							<span> {'\n'} Git | Github | Terminal</span>
							<span> {'\n'} GitHub Page | Heroku</span>
						</div>
					</MDBAnimation>
					<MDBAnimation type='fadeInRight' delay='0.3s' duration='600ms'>
						<div className='skill-box'>
							<img src={design} alt='designing' />
							<div className='skill-box-text'>DESIGNER</div>
							<span style={{ fontWeight: 'bold' }}>Design Areas</span>
							<span>
								{'\n'}UX, UI, Website, Mobile, Apps, Logo, Consumer Products
								<div></div>
							</span>
							<span style={{ fontWeight: 'bold' }}> {'\n'} Design Tools</span>
							<span> {'\n'} Figma</span>
							<span> {'\n'} Sketch</span>
							<span> {'\n'} InVision</span>
							<span> {'\n'} Adobe XD</span>
							<span> {'\n'} Pen | Paper | Marker</span>
							<span> {'\n'} Adobe Photosop</span>
							<span> {'\n'} Adobe Indesign</span>
							<span> {'\n'} Adobe Illustrator</span>
						</div>
					</MDBAnimation>
				</div>
				<div className='background-style'> </div>
			</>
		);
}
export default Skills