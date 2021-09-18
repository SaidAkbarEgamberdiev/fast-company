import React, { useState } from "react";
import api from "./API";
import SearchStatus from "./components/serachStatus";
import Users from "./components/users";
const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [status, setStatus] = useState(false);

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));
  const handleChangeStatus = () => {
    setStatus(true);
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        status={status}
        handleChangeStatus={handleChangeStatus}
      />
    </>
  );
};

export default App;
