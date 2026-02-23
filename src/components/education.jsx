import Card from "./card";
import { useState } from "react";

let courseList = [
    {
        id: crypto.randomUUID(),
        startYear: 2012,
        endYear: 2014,
        title: "Computer Science and Software Engineering",
        place: "University of London",
        description: "BSc Computer Science and Software Engineering with industrial year. Modules include object oriented programming, mobile applications, AI and system development."
    },
    {
        id: crypto.randomUUID(),
        startYear: 2010,
        endYear: 2012,
        title: "BTEC Level 3 ICT and A-level maths",
        place: "Highbridge College",
        description: "Advanced programme combining practical ICT competencies with strong mathematical and analytical skills, including IT system management, problem‑solving, and rigorous quantitative reasoning."
    }
];

function Education({ edit }) {
    const [courses, setCourses] = useState(courseList);
    function addCourse() {
        setCourses([...courses, {id: crypto.randomUUID(), startYear: null, endYear: null, title: "", place: "", description: ""}]);
    };

    function AddButton() {
        return (
            edit ? <div className="headerButtonGroup"><button className="blueBg" type="button" onClick={addCourse}>Add course</button></div> : <></>
        )
    };

    return (
        <div>
            <h2>Eduation and Qualifications</h2>
            <AddButton />
            {courses.map((course) => <Card key={course.id} item={course} edit={edit} list="courses" updateList={setCourses}/>)}
        </div>
    );
};

export default Education;