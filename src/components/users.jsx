import React, { useState } from "react";
import api from "../API";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const renderPhrase = (numberOfUsers) => {
    const lastNumber = Number(numberOfUsers.toString().slice(-1));
    if (numberOfUsers > 4 && numberOfUsers < 15) return "Человек тусанет";
    if ([2, 3, 4].indexOf(lastNumber) >= 0) return "Человека тусанут";
    if (lastNumber === 1) return "Человек тусанет";
    return "Человек тусанет";
  };

  return (
    <>
      <h2>
        <span
          className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
            : `с тобой некто не тусанут`}
        </span>
      </h2>
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
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={`badge m-1 bg-${quality.color}`}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td key={user.profession._id}>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
