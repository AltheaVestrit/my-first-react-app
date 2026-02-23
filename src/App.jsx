import { useState } from 'react';
import './App.css';

import Header from './components/header';
import PersonalDetails from './components/personal_details';
import BreakLine from './components/break_line';
import WorkExperience from './components/work_experience';
import Education from './components/education';

function App() {
  const [edit, setEdit] = useState(false);
  return (
    <>
        <Header edit={edit} setEdit={setEdit}/>
        <BreakLine />
        <PersonalDetails edit={edit}/>
        <BreakLine />
        <WorkExperience edit={edit}/>
        <BreakLine />
        <Education edit={edit}/>
    </>
  );
};

export default App
