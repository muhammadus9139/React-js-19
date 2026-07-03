import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/useradd">Add user</NavLink>
        </li>
      </ul>

      <h1>Integrate Post method API</h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/useradd" element={<UserAdd />} />
      </Routes>
    </div>
  );
}

export default App;
