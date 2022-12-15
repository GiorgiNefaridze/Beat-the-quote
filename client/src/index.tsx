import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { DifficultyContextProvider } from "./context/DifficultyContext";
import { UserContextProvider } from "./context/UserContext";
import { AuthContextProvider } from "./context/AuthPopUpContext";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <AuthContextProvider>
      <UserContextProvider>
        <DifficultyContextProvider>
          <App />
        </DifficultyContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </Router>
);
