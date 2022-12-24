import React from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "./context/UserContext";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";

import { AppWrapper, GlobalStyle } from "./App.style";

const App: React.FC = () => {
  const { user } = UserContext();

  return (
    <AppWrapper>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/game"
          element={user?.email?.length ? <GamePage /> : <HomePage />}
        />
      </Routes>
    </AppWrapper>
  );
};

export default App;
