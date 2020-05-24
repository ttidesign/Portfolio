import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css';
function NavBar () {
    return (
			<div>
				
				<Navbar  expand='lg' bg='' variant='dark'>
					<Navbar.Brand href='#home'>TTiD</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#features'>About Me</Nav.Link>
							<Nav.Link href='#pricing'>Portfolio</Nav.Link>
							<Nav.Link href='#Resume'>Resume</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavBar