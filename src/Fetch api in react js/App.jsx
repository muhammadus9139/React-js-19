import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https://fake-json-api.mock.beeceptor.com/users";

    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data);
  }

  return (
    <div>
      <h1>Fetch api in react js</h1>
    </div>
  );
}

export default App;
