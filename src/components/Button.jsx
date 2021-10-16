import React from "react";

const Button = (props) => {
  return (
    <div className="counter__buttons">
      <button
        onClick={props.click}
        className={`counter__btn btn ${props.btnColor}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
