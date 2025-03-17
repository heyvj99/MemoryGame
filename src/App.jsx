import { useState, useRef, useEffect } from "react";
import "./style.css";
import { randomizeArray } from "./utils.js";
import Card from "./Card.jsx";
import dataArr from "./data";
import bgImage from "./assets/bg2.png";

function App() {
  const [data, setData] = useState(dataArr);
  const [gameWon, setGameWon] = useState(false);

  const currentScore = useRef(0);
  const clickedArr = useRef([]);
  const [maxVal, setMaxVal] = useState(0);

  const showGameOver = () => {
    let elemlist = document.querySelectorAll(".card");

    Array.from(elemlist).forEach((element) => {
      element.style.backgroundColor = "rgb(255, 192, 187)";
    });

    setTimeout(() => {
      Array.from(elemlist).forEach((element) => {
        element.style.backgroundColor = "rgb(253, 255, 252)";
      });
    }, 1500);
  };

  const showGameWon = () => {
    setGameWon(true);
  };

  const calcScore = (e) => {
    if (clickedArr.current.includes(e)) {
      let temp = Math.max(maxVal, currentScore.current);
      setMaxVal(temp);
      showGameOver();
      clickedArr.current = [];
      currentScore.current = 0;
      return true;
    } else {
      clickedArr.current.push(e);
      currentScore.current++;
      if (currentScore.current == 12) {
        console.log("game won");
        showGameWon();
      }

      return false;
    }
  };

  const handleClick = (name) => {
    let isGameOver = calcScore(name);
    if (isGameOver) {
      setTimeout(() => {
        setData(randomizeArray([...data]));
      }, 1500);
    } else {
      setData(randomizeArray([...data]));
    }
  };

  if (gameWon) {
    console.log("game won");
    return (
      <>
        <div className="winningState">
          <h1>You Won!!!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="scores">
        <h2>Current Score: {currentScore.current}</h2>
        <div className="title">
          <h1>Memory Game</h1>
          <p>Try not to select a card twice!</p>
        </div>
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
