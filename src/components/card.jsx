function cardDescription(description) {
    if (description.length === 1) {
        return (<p>{description[0]}</p>);
    } else {
        return (
            <ul>
                {description.map((point) => <li>{point}</li>)}
            </ul>
        )
    }
}

function Card(job) {
    return (
        <div className="gridParent">
            <p className="left">{`${job.startYear} - ${job.endYear}`}</p>
            <div>
                <p className="bold">{job.title}</p>
                <p className="it">{job.place}</p>
                {cardDescription(job.description)}
            </div>
        </div>
    )
}

export default Card;