import React from "react";

import HomePage from "./components/HomePage/HomePage";

import { AppWrapper, GlobalStyle } from "./App.style";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <HomePage />
    </AppWrapper>
  );
};

export default App;
