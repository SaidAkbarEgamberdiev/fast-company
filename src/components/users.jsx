import React, { useState } from "react";
import api from "../API";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const hendleDelete = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user._id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  };

  const hendleUsers = (number) => {
    if (number > 1 && number <= 4) {
      return (
        <span className="badge bg-primary">{`${number}человека тусанет с тобой сегодня`}</span>
      );
    } else if (number === 0) {
      const tableHead = document.querySelector("thead");
      tableHead.innerHTML = "";
      return <span className="badge bg-danger">Не кто с тобой не тусанет</span>;
    } else {
      return (
        <span className="badge bg-primary">{`${number}человек тусанет с тобой сегодня`}</span>
      );
    }
  };

  return (
    <>
      {hendleUsers(users.length)}

      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретилсяб раз</th>
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
                    className={`badge bg-${quality.color}`}
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
                  onClick={() => hendleDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
