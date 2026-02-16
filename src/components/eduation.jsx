import Card from "./card";

let courses = [
    {
        startYear: 2012,
        endYear: 2014,
        title: "Computer Science and Software Engineering",
        place: "University of London",
        description: ["BSc Computer Science and Software Engineering with industrial year. Modules include object oriented programming, mobile applications, AI and system development."]
    },
    {
        startYear: 2010,
        endYear: 2012,
        title: "BTEC Level 3 ICT and A-level maths",
        place: "Highbridge College",
        description: [""]
    }
]

function Education() {
    return (
        <div>
            <h2>Eduation and Qualifications</h2>
            {courses.map((course) => Card(course))}
        </div>
    )
}

export default Education;