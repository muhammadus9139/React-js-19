import React from "react";
import { Link } from "react-router-dom";


function Lists() {


    const usersdata = [
        { id: 1, name: "John", email: "john@example.com" },
        { id: 2, name: "Jane", email: "jane@example.com" },
        { id: 3, name: "Bob", email: "bob@example.com" },
        { id: 4, name: "Alice", email: "alice@example.com" },
        { id: 5, name: "Mike", email: "mike@example.com" }
    ];

    return (

        <div style={{ marginLeft: "20px" }}>
            <h1>Users list page</h1>
            {
                usersdata.map((item) => (
                    <div >
                        <Link to={"/users/" + item.id}>{item.name}</Link>
                    </div>
                ))
            }

            <h1>Users list page, with name in URL</h1>
            {
                usersdata.map((item) => (
                    <div >
                        <Link to={"/users/"+ item.id + "/" + item.name}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Lists
