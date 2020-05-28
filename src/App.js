import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import NavBar from './components/Nav/NavBar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import Contacts from './components/Contacts/Contacts';
import Trade from './components/Trade/Trade';
import Nuu from './components/Nuu/Nuu'
import Swirl from './components/Swirl/Swirl';
function App() {
	return (
		<div>
			<Route path='/' component={NavBar} />
			<Route path='/' exact component={Intro} />
			<Route path='/' exact component={Skills} />
			<Route path='/' exact component={Projects} />
			<Route path='/' exact component={Contacts} />
			<Route path='/resume' exact component={Resume} />
			<Route path='/trade' exact component={Trade} />
      <Route path='/nuu' exact component={Nuu}/>
			<Route path='/swirl' exact component={Swirl} />
			<Route path='/' component={Footer} />
		</div>
	);
}

export default App;
