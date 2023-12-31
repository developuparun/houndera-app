import React from "react";
import ReactDOMClient from "react-dom/client";
import { HeaderScreen } from "./screens/HeaderScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HeaderScreen />);
