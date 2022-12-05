import ReactDOM from "react-dom/client";

import App from "./App";

import { DifficultyContextProvider } from "./context/DifficultyContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DifficultyContextProvider>
    <App />
  </DifficultyContextProvider>
);
