import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TwitterFollorCard } from "./TwitterFollowCard.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const formatUsername = (username) => `@$username`;

root.render(
  <section className="app">
    <TwitterFollorCard formtUsername={formatUsername} isFollowing={false} userName={"juancarsep"} name={"Juan Carballo"} />
    <TwitterFollorCard isFollowing={true} userName={"carballosepejuan"} name={"Carballo Juan"} />
  </section>
);
