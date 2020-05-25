import React from 'react';
import {Route} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Nav/NavBar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
function App() {
  return (
    <div >
      <Route path='/' component={NavBar} />
      <Route path='/' exact component={Intro}/>
      <Route path='/' exact component ={Skills}/>
      <Route path='/' exact component={Projects}/>
      <Route path='/' exact component={Footer}/>
      <Route path='/resume'  exact component={Resume}/>
    </div>
  );
}

export default App;
