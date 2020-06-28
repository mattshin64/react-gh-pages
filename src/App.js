import React from 'react';
import './App.css';
import Header from './components/header.js'
import AboutMe from './components/aboutme.js'
import MyExperience from './components/myexperience.js'
import MySkills from './components/myskills.js'
function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <MyExperience/>
      <MySkills/>
    </div>
  );
}

export default App;
