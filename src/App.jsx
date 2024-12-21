import { useState, useEffect, useRef } from "react";
// import "./App.css";
import "./style.css";
import { randomizeArray } from "./utils.js";
import Card from "./Card.jsx";

function App() {
  const dataArr = [
    { name: "limber", url: "https://pokeapi.co/api/v2/ability/7/" },
    { name: "imposter", url: "https://pokeapi.co/api/v2/ability/150/" },
    { name: "ditto", url: "https://pokeapi.co/api/v2/pokemon-form/132/" },
    { name: "soulsilver", url: "https://pokeapi.co/api/v2/version/16/" },
    { name: "alpha-sapphire", url: "https://pokeapi.co/api/v2/version/26/" },
    { name: "leafgreen", url: "https://pokeapi.co/api/v2/version/11/" },
  ];
  // const [count, setCount] = useState(0);
  const [data, setData] = useState(dataArr);

  // const maxScore = useRef(0);
  const currentScore = useRef(0);
  const clickedArr = useRef([]);
  const [maxVal, setMaxVal] = useState(0);

  // useEffect(() => {
  //   clickedArr.current = [];
  //   currentScore.current = 0;
  // }, [maxVal]);

  const calcScore = (e) => {
    // console.dir(e);
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

    console.log(currentScore.current);
    console.log(maxVal);
  };

  const handleClick = (name) => {
    console.dir(name);
    setData(randomizeArray([...data]));
    // console.log(data);
    calcScore(name);
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <h3>Current Score: {currentScore.current}</h3>
        <h3>Max Score: {maxVal}</h3>
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
