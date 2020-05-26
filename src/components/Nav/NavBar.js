import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import logo from '../images/TTiD-Wsmall.svg';
function NavBar() {
	return (
		<div>
			<Navbar expand='lg' bg='' variant='dark'>
				<Navbar.Brand href='/'>
					<img className='logo' src={logo} alt='ttid logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='#Portfolio'>Portfolio</Nav.Link>
						<Nav.Link className='link' href='/resume'>
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
