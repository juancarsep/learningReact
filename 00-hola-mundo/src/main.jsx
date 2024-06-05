import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TwitterFollorCard } from "./TwitterFollowCard.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section className="app">
    <TwitterFollorCard userName={"juancarsep"} name={"Juan Carballo"} />
    <TwitterFollorCard userName={"carballosepejuan"} name={"Carballo Juan"} />
  </section>
);
