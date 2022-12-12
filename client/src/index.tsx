import ReactDOM from "react-dom/client";

import App from "./App";

import { DifficultyContextProvider } from "./context/DifficultyContext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserContextProvider>
    <DifficultyContextProvider>
      <App />
    </DifficultyContextProvider>
  </UserContextProvider>
);
