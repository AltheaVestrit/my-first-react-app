import Card from "./card";

let jobs = [
    {
        id: 1,
        startYear: 2015,
        endYear: "present",
        title: "Junior software developer",
        place: "Explore the web ltd, London",
        description: ["Used a range of languages, operating systems and development tools as well as experiencing the system development life cycle. Specialising in mobile technology, I am keen to develop as a graduate trainee in software development."]
    },
    {
        id: 2,
        startYear: 2010,
        endYear: 2015,
        title: "Website analyst",
        place: "Quality ltd, London",
        description: [
            "Creating online analyses", 
            "Writing personal branding plans",
            "Writing online marketingplans",
            "Content marketing and content management"
        ]
    },
    {
        id: 3,
        startYear: 2007,
        endYear: 2010,
        title: "Online marketing",
        place: "Advertisy, Manchester",
        description: [
            "Analyse and optimize positions within different seacrh engines",
            "Search engine optimalisation",
            "Leading large linkbuilding actitivities",
            "On-site SEO research and writing optimalisation reports"
        ]
    }
]

function WorkExperience() {
    return (
        <div>
            <h2>Work Experience</h2>
            {jobs.map((job) => Card(job))}
        </div>
    )
}

export default WorkExperience;