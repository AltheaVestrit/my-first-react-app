import Card from "./card";
import { useState } from "react";

let jobList = [
    {
        id: crypto.randomUUID(),
        startYear: 2015,
        endYear: "present",
        title: "Junior software developer",
        place: "Explore the web ltd, London",
        description: "Used a range of languages, operating systems and development tools as well as experiencing the system development life cycle. Specialising in mobile technology, I am keen to develop as a graduate trainee in software development."
    },
    {
        id: crypto.randomUUID(),
        startYear: 2010,
        endYear: 2015,
        title: "Website analyst",
        place: "Quality ltd, London",
        description: "Creating online analyses, writing personal branding plans, writing online marketingplans, content marketing and content management."
    },
    {
        id: crypto.randomUUID(),
        startYear: 2007,
        endYear: 2010,
        title: "Online marketing",
        place: "Advertisy, Manchester",
        description: "Analyse and optimize positions within different seacrh engines, search engine optimalisation, leading large linkbuilding actitivities, on-site SEO research and writing optimalisation reports."
    }
];

function WorkExperience({ edit }) {
    const [jobs, setJobs] = useState(jobList);
    function addJob() {
        setJobs([...jobs, {id: crypto.randomUUID(), startYear: null, endYear: null, title: "", place: "", description: ""}]);
    };
    
    function AddButton() {
        return (
            edit ? <div className="headerButtonGroup"><button className="blueBg" type="button" onClick={addJob}>Add job</button></div> : <></>
        );
    };
    
    return (
        <div>
            <div className="header">
                <h2>Work Experience</h2>
                <AddButton />
            </div>
            {jobs.map((job) => <Card key={job.id} item={job} edit={edit} list={jobs} updateList={setJobs}/>)}
        </div>
    );
};

export default WorkExperience;