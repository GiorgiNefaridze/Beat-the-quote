import React, { useEffect } from "react";

import AboutGamePopUp from "../AboutGamePopUp/AboutGamePopUp";

import { Button, ButtonsWrapper } from "./HomePage.style";

const HomePage: React.FC = () => {
  return (
    <ButtonsWrapper>
      <AboutGamePopUp />
      <Button title="Start Game">Start Game</Button>
      <Button title="Go Dashboard">Go Dashboard</Button>
    </ButtonsWrapper>
  );
};

export default HomePage;
