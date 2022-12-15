import ReactDOM from "react-dom/client";

import App from "./App";

import { DifficultyContextProvider } from "./context/DifficultyContext";
import { UserContextProvider } from "./context/UserContext";
import { AuthContextProvider } from "./context/AuthPopUpContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <UserContextProvider>
      <DifficultyContextProvider>
        <App />
      </DifficultyContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
);
