import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Nav/NavBar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
function App() {
  return (
    <div >
      <NavBar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
