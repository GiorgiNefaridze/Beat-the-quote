import { useState, createContext, useContext } from "react";

import { IProps } from "./UserContext";

interface IDifficultyContext {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
}

const difficultyContext = createContext({} as IDifficultyContext);

export const DifficultyContext = () => {
  return useContext(difficultyContext);
};

export const DifficultyContextProvider = ({ children }: IProps) => {
  const [difficulty, setDifficulty] = useState<string>("");

  return (
    <difficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </difficultyContext.Provider>
  );
};
