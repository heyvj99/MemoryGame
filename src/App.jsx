import { useState, useRef } from "react";
import "./style.css";
import { randomizeArray } from "./utils.js";
import Card from "./Card.jsx";
import dataArr from "./data";

function App() {
  const [data, setData] = useState(dataArr);

  const currentScore = useRef(0);
  const clickedArr = useRef([]);
  const [maxVal, setMaxVal] = useState(0);

  const calcScore = (e) => {
    if (clickedArr.current.includes(e)) {
      console.log("currentScore" + currentScore.current);
      let temp = Math.max(maxVal, currentScore.current);

      setMaxVal(temp);
      clickedArr.current = [];
      currentScore.current = 0;
    } else {
      clickedArr.current.push(e);
      currentScore.current++;
    }
  };

  const handleClick = (name) => {
    setData(randomizeArray([...data]));
    calcScore(name);
  };

  return (
    <>
      <div className="title">
        <h1>Memory Game</h1>
        <p>Try not to select a card twice!</p>
      </div>
      <div className="scores">
        <h2>Current Score: {currentScore.current}</h2>
        <h2>Max Score: {maxVal}</h2>
      </div>
      <div className="cardContainer">
        {data.map((elem) => {
          return (
            <Card
              name={elem.name}
              handler={handleClick}
              url={elem.url}
              key={elem.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
