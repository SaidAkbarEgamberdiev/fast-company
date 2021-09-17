import React from "react";

const SearchStatus = ({ length }) => {
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
        <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
          {length > 0
            ? `${length} ${renderPhrase(length)} с тобой сегодня`
            : `с тобой некто не тусанут`}
        </span>
      </h2>
    </>
  );
};

export default SearchStatus;
