import { useEffect, useState } from "react";

function UserList() {
  const [usersdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();

    setuserdata(response);
    setloading(false);
  };

  return (
    <div>
      {!loading ? (
        usersdata.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UserList;
