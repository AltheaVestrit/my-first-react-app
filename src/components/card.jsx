import { useState } from "react";

function Card({ item, edit, list, updateList }) {
    const [start, setStart] = useState(item.startYear);
    const [end, setEnd] = useState(item.endYear);
    const [title, setTitle] = useState(item.title);
    const [place, setPlace] = useState(item.place);
    const [description, setDescription] = useState(item.description);

    function changeState(event, handler) {
        handler(event.target.value);
    };

    function deleteItem() {
        updateList(list => list.filter(i => (i.id != item.id)));
    };

    function DelButton() {
        return (
            edit ? <button className="redBg" type="button" onClick={deleteItem}>Delete</button> : <></>
        )
    };

    return (
        <div className="gridParent">
            <p className="left">
                <input type="text" placeholder="Start Year" value={start} onChange={event => changeState(event,setStart)} disabled={!edit}/>
                 - 
                <input type="text" placeholder="End Year" value={end} onChange={event => changeState(event,setEnd)} disabled={!edit}/>
                <DelButton />
            </p>
            <div>
                <input className="bold block" placeholder="Job / Course Title" type="text" value={title} onChange={event => changeState(event,setTitle)} disabled={!edit}/>
                <input className="em block" placeholder="Company / School Name" type="text" value={place} onChange={event => changeState(event,setPlace)} disabled={!edit}/>
                <textarea rows="auto" className="block" placeholder="Some text describing the job or course." value={description} onChange={event => changeState(event,setDescription)} disabled={!edit}></textarea>
            </div>
        </div>
    );
};

export default Card;