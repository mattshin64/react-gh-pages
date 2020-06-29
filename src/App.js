import React from 'react';
import './App.css';
import Header from './components/header.js'
import AboutMe from './components/aboutme.js'
import MyExperience from './components/myexperience.js'
import MySkills from './components/myskills.js'
import ContactMe from './components/contactme.js'
function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <MyExperience/>
      <MySkills/>
      <ContactMe/>
    </div>
  );
}

export default App;
