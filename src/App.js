import React from 'react';
import './App.css';
import Header from './components/header.js'
import AboutMe from './components/aboutme.js'
import MyExperience from './components/myexperience.js'
import MySkills from './components/myskills.js'
import ContactMe from './components/contactme.js'
import Demo from './components/demo.js'
function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <MyExperience/>
      <MySkills/>
      <div id='container'>
        <h2 class='ml-4'>Project Demo</h2>
        <h3 class='ml-5'>Real Estate Brokerage Pricing Graph (Mock Data)</h3>
        <Demo/>
      </div>
      <ContactMe/>
    </div>
  );
}

export default App;
