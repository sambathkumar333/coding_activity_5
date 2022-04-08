import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App3 from "./App3";
import App4 from "./App4";
//import App5 from "./App5";

//import App3 from "./App";
//import App1 from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App4 />
  </StrictMode>
);
