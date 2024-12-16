import { useState } from "react";
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

  const handleClick = () => {
    console.log("clicked");
    setData(randomizeArray([...data]));
    console.log(data);
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div className="cardContainer">
        {data.map((elem) => {
          return (
            <Card
              name={elem.name}
              onClick={handleClick}
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
