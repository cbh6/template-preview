import React, { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Cards from "./Cards";
import Text from "./Text";

const template_1 = [
  {
    elementType: "banner",
    color: "lightcoral",
  },
  {
    elementType: "text",
    // text: '...'
  },
  {
    elementType: "banner",
    color: "lightblue",
  },
  {
    elementType: "cards",
    color: "rgb(214, 214, 3)",
  },
];

const template_2 = [
  {
    elementType: "text",
    // text: '...'
  },
  {
    elementType: "cards",
    color: "red",
  },
  {
    elementType: "banner",
    color: "brown",
  },
];

const getComponentFromElementType = ({ elementType, ...props }, key) => {
  switch (elementType) {
    case "banner":
      return <Banner {...props} key={key} />;
    case "text":
      return <Text {...props} key={key} />;
    case "cards":
      return <Cards {...props} key={key} />;
    default:
      <p>None</p>;
  }
};

function App() {
  const [selectValue, setSelectValue] = useState("1");
  const [template, setTemplate] = useState(template_1);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
    if (event.target.value === "1") {
      setTemplate(template_1);
    } else {
      setTemplate(template_2);
    }
  };

  return (
    <div className="App">
      <select
        name="templates"
        id="templates"
        value={selectValue}
        onChange={handleChange}
      >
        <option value={"1"}>Template 1</option>
        <option value={"2"}>Template 2</option>
      </select>
      <br />
      {template.map((element, i) => getComponentFromElementType(element, i))}
    </div>
  );
}

export default App;
