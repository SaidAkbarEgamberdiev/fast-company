import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({ user, onDelete }) => {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <Quality qualities={user.qualities} />
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate} / 5`}</td>
        <td>
          <BookMark />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default User;
