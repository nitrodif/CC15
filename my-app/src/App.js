// App.js

import React from 'react';
import './App.css'; // Import CSS for styling

import PersonalInfo from './PersonalInfo.js';
import Skills from './Skills.js'
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <div className="content">
        <PersonalInfo
          name="Alex Campos"
          bio="Passionate about coffee and technology."
          email="alex.c22513@gmail.com"
          linkedin="https://www.linkedin.com/in/alex-campos-228234209/"
        />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;