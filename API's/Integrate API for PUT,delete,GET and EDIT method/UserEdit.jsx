import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {

    const { id } = useParams();

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');

    const navigate = useNavigate();
    const url = "http://localhost:3000/users/" + id;

    useEffect(() => (
        getUserData()
    ), []);

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setname(response.name);
        setage(response.age);
        setemail(response.email);
    };

    // PUT method API to update data
    const updateuserdata = async () => {
        let response = await fetch(url, {
            method: 'Put',
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        console.log(response);
        if (response) {
            alert("User data updated successfully");
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Edit User details</h2>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="User name" />
            <br /><br />
            <input type="text" value={age} onChange={(e) => setage(e.target.value)} placeholder="User age" />
            <br /><br />
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="User email" />
            <br /><br />
            <button onClick={updateuserdata}>Update User</button>
        </div>
    );
}

export default UserEdit;
