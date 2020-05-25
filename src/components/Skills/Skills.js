import React from 'react'
import design from '../images/design2.png'
import code from '../images/code2.png'
// import './Skills.css'
function Skills() {
    return (
			<>
				<div className='skills-wrapper'>
					<div className='skill-box'>
						<img src={code} />
						<div className='skill-box-text'>DEVELOPER</div>
						<span style={{ fontWeight: 'bold' }}>
							Stacks & Programing Languages
						</span>
						<span>
							{'\n'}Javascript, React, Python, Node.js, Express.js, Django
						</span>
						<div></div>
						<span style={{ fontWeight: 'bold' }}> {'\n'} Developer Tools</span>
						<span> {'\n'} HTML5 | CSS3</span>
						<span> {'\n'} Gitpage | Heroku</span>
						<span> {'\n'} Bootstrap</span>
						<span> {'\n'} MongoDB | Mongo Atlas | Mongoose</span>
						<span> {'\n'} SQL</span>
						<span> {'\n'} Codepen | Postman</span>
						<span> {'\n'} Git | Github</span>
						<span> {'\n'} Gitpage | Heroku</span>
					</div>
					<div className='skill-box'>
						<img src={design} />
						<div className='skill-box-text'>DESIGNER</div>
						<span style={{ fontWeight: 'bold' }}>Design Areas</span>
						<span>
							{'\n'}UX, UI, Website, Mobile, Apps, Logo, Consumer Products
						<div></div>
						</span>
						<span style={{ fontWeight: 'bold' }}> {'\n'} Design Tools</span>
						<span> {'\n'} Figma</span>
						<span> {'\n'} Sketch</span>
						<span> {'\n'} Invision</span>
						<span> {'\n'} Adobe CC</span>
						<span> {'\n'} Paper | Pen | Marker</span>
						<span> {'\n'} Solidworks</span>
						<span> {'\n'} Fusion 360</span>
						<span> {'\n'} Keyshot</span>
					</div>
				</div>
				<div className='background-style'> </div>
			</>
		);
}
export default Skills