import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// NYSDS styles are loaded via <link> tag in index.html

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
