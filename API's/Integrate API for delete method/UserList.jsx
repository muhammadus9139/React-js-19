//Get api
// and delete API
import { useEffect, useState } from "react";

function UserList() {
  const [usersdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(false);
  const url = "http://localhost:3000/users";

  useEffect(() => {
    setloading(true);
    getUserData();
  }, []);

  // GET API , here we use it to display data
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();

    setuserdata(response);
    setloading(false);
  };

  // Delete api, here we use to delete data
  const deleteuser = async (id) => {
    console.log(id);
    let response = await fetch(url + "/" + id, {
      method: 'delete'
    });
    response = await response.json();
    if (response) {
      alert("Record deleted");
      getUserData();
    }
  };

  return (
    <div>
      {!loading ? (
        usersdata.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li><button onClick={() => deleteuser(user.id)}>Delete</button></li>
          </ul>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UserList;
