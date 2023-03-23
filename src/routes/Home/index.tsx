import React from "react";
import useGetAllUser from "../../hooks/useGetAllUser";
import { ColoredDiv } from "./styles";

const Home = () => {
  const { listUser } = useGetAllUser();

  console.log("[List User]", listUser);

  return (
    <div>
      <h3>This is homepage</h3>
      <ColoredDiv>React Emotion Styled</ColoredDiv>
    </div>
  );
};

export default Home;
