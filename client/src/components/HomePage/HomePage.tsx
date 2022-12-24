import React, { useState, useRef } from "react";

import AboutGamePopUp from "../AboutGamePopUp/AboutGamePopUp";
import Dashboard from "../Dashboard/Dashboard";

import { Button, HomeWrapper } from "./HomePage.style";

const HomePage: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const startRef = useRef<HTMLButtonElement | null>(null);

  return (
    <HomeWrapper>
      <Dashboard />
      <Button
        ref={startRef}
        title="Start Game"
        onClick={() => setShowPopUp(true)}
      >
        Start Game
      </Button>
      {showPopUp && (
        <AboutGamePopUp setShowPopUp={setShowPopUp} startRef={startRef} />
      )}
    </HomeWrapper>
  );
};

export default HomePage;
