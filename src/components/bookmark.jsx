import React, { useState } from "react";

const BookMark = () => {
  const [status, setStatus] = useState(false);
  const handleChangeStatus = () => {
    if (!status) setStatus(true);
    else setStatus(false);
  };
  const bookMarkClass = () => {
    if (status) {
      return "bi bi-bookmark-fill";
    } else {
      return "bi bi-bookmark";
    }
  };
  return (
    <>
      <button onClick={handleChangeStatus}>
        <i className={bookMarkClass()}></i>
      </button>
    </>
  );
};

export default BookMark;
