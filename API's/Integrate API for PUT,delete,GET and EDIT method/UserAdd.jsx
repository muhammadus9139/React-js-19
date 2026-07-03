// Add new users using POST API
import { useState } from "react";

function UserAdd() {

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');

    const createuser = async () => {
        console.log(name, age, email);
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: 'Post',
            body: JSON.stringify({ name, email, age })
        });
        response = await response.json();
        if (response) {
            alert("User added successfully");
        }
    };

    return (
        <div>
            <h1>Add new user</h1>
            <input type="text" onChange={(event) => setname(event.target.value)} placeholder="Enter name" />
            <br /><br />
            <input type="text" onChange={(event) => setage(event.target.value)} placeholder="Enter age" />
            <br /><br />
            <input type="text" onChange={(event) => setemail(event.target.value)} placeholder="Enter email" />
            <br /><br />
            <button onClick={createuser}>Add user</button>
        </div>
    );
}

export default UserAdd;
