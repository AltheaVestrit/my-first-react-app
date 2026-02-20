import { useState } from 'react';

function PersonalDetails({ edit }) {
    const [name, setName] = useState("Amelia Davis");
    const [address, setAddress] = useState("14 Tottemham Court Road, London, W1T 1JY");
    const [phone, setPhone] = useState("+44 20 7946 0638");
    const [mail, setMail] = useState("amelia.davis@mail.uk");
    return (
        <>
            <h2>Personal Details</h2>
            <div className="gridParent">
                <p className="left">Name</p><input type="text" value={name} onChange={(event) => setName(event.target.value)} disabled={!edit}/>
                <p className="left">Address</p><input type="text" value={address} onChange={(event) => setAddress(event.target.value)} disabled={!edit}/>
                <p className="left">Phone number</p><input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} disabled={!edit}/>
                <p className="left">Email address</p><input type="text" value={mail} onChange={(event) => setMail(event.target.value)} disabled={!edit}/>
            </div>
        </>
    )
}

export default PersonalDetails;