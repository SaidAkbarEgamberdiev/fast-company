import React from "react";

const Quality = ({ qualities }) => {
  return (
    <>
      <td>
        {qualities.map((quality) => (
          <span key={quality._id} className={"badge m-1 bg-" + quality.color}>
            {quality.name}
          </span>
        ))}
      </td>
    </>
  );
};
export default Quality;
