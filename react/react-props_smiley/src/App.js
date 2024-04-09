import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return <>{isHappy ? "😁" : "😟"}</>;
}
