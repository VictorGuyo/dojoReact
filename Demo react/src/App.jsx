import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";

const listHeros = [
  {
    name: "Claire",
    isLikingReact: true,
  },
  {
    name: "Mahdi",
    isLikingReact: false,
  },
  {
    name: "Victor",
    isLikingReact: true,
  },
  {
    name: "Cédric",
    isLikingReact: false,
  },
];

function App() {
  const [isLike, setisLike] = useState(true);

  const isLikeOrNot = (i) => {
    setisLike(!isLike);
    listHeros[i].isLikingReact = !listHeros[i].isLikingReact;
    return isLike;
  };

  return (
    <>
      {listHeros.map((patron, index) => (
        <Hero
          key={index}
          place= {index}
          name={patron.name}
          isLiking={patron.isLikingReact}
          isLikeOrNot={isLikeOrNot}
        />
      ))}
    </>
  );
}

export default App;
