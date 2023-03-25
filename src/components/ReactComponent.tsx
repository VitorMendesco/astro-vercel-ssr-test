import { useState } from "react";

// import { button, test } from "./ReactComponent.css";

const ReactComponent = () => {
  const [value, setValue] = useState(0);

  const handleButtonClick = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h1 className="text-red-800">Test TWIND</h1>
      <button className="text-red-800" onClick={handleButtonClick}>
        React Component
      </button>
      <h3>{value}</h3>
    </>
  );
};

export default ReactComponent;
