import React from "react";

const Bouncingword = ({onMouseEnter,textClass,text}) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      className={`${textClass}`}
    >
      {text}
    </span>
  );
};

export default Bouncingword;
