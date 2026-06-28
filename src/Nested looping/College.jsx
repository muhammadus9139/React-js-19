import Student from "./student";

function College({ college }) {
    return (
        <div style={{ color: "white", backgroundColor: "grey", border: "2px solid black", padding: "2px", margin: "3px" }}>
            <h1>Name: {college.name}</h1>
            <ul>
                <li>
                    <h3>city:{college.city}</h3>
                </li>

                <li>
                    <h3>website: {college.email}</h3>
                </li>

                <li>
                {
                college.student && <Student student={college.student}/>
                 }
                </li>
            </ul>
        </div>
    );
}

export default College;
