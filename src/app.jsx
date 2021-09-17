import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/serachStatus";
import API from "./API";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
      )}
    </>
  );
};

export default App;
