import React from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { ColoredDiv } from "./styles";

const Home = () => {
  const { data, status } = useGetPokemon("pokemon/ditto");

  console.log(data, status);

  return (
    <div>
      <h3>This is homepage</h3>
      <ColoredDiv>React Emotion Styled</ColoredDiv>
    </div>
  );
};

export default Home;
