import { useState } from 'react';
import './App.css';

import Header from './components/header';
import PersonalDetails from './components/personal_details';
import BreakLine from './components/break_line';
import WorkExperience from './components/work_experience';
import Education from './components/eduation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="header">
        <Header />
      </header>
      <body>
        <BreakLine />
        <PersonalDetails />
        <BreakLine />
        <WorkExperience />
        <BreakLine />
        <Education />
      </body>
    </>
  )
}

export default App
