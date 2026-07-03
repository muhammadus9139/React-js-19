import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/useradd">Add user</NavLink>
        </li>
      </ul>
      <h2>Integrate API for PUT,delete,GET and EDIT method</h2>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;
