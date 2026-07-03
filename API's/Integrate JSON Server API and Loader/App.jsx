import { useEffect, useState } from "react";

export default function App() {

  const [usersdata, setuserdata] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {

    setloading(true);

    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setuserdata(response);
    setloading(false);
  };

  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>
      {
        !loading ?
          usersdata.map((user) => (
            <ul>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
            </ul>
          ))
          : <h1>loading...</h1>
      }
    </div>
  );
}
