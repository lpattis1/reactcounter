import React, { createRef, useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  let numRef = createRef();

  const incrementCounter = () => {
    setCount(count + 1);
    setColor("blue");
  };

  const decreaseCounter = () => {
    if (count <= 0) {
      setCount(0);
      setColor("");
    } else {
      setCount(count - 1);
      setColor("red");
    }
  };

  useEffect(() => {
    numRef.current.style.color = color;
  }, [color]);
  return (
    <div className="counter d-flex flex-column justify-content-center align-items-center">
      <div className="number-center d-flex flex-column justify-content-center align-items-center">
        <h4
          ref={numRef}
          className="counter__number text-center d-flex flex-column justify-content-center align-items-center"
        >
          {count}
        </h4>
      </div>
      <div className="counter__buttons d-flex justify-content-center align-items-center">
        <Button btnColor="btn-primary px-5 py-2" click={incrementCounter}>
          +
        </Button>
        <Button btnColor="btn-secondary mx-2 px-5 py-2" click={decreaseCounter}>
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
