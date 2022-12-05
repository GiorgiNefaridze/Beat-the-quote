import React from "react";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";

import { AppWrapper, GlobalStyle } from "./App.style";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NavBar />
      <HomePage />
    </AppWrapper>
  );
};

export default App;
