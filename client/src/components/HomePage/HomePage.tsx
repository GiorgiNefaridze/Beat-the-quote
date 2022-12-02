import React, { useState, useRef } from "react";

import AboutGamePopUp from "../AboutGamePopUp/AboutGamePopUp";

import { Button, ButtonsWrapper } from "./HomePage.style";

const HomePage: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const startRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ButtonsWrapper>
      <Button
        ref={startRef}
        title="Start Game"
        onClick={() => setShowPopUp(true)}
      >
        Start Game
      </Button>
      <Button title="Go Dashboard">Go Dashboard</Button>
      {showPopUp && (
        <AboutGamePopUp setShowPopUp={setShowPopUp} startRef={startRef} />
      )}
    </ButtonsWrapper>
  );
};

export default HomePage;
