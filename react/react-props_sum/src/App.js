import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={2} valueB={5} />
      <br></br>
      <Sum valueA={8} valueB={3} />
    </h1>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <>
      {valueA} + {valueB} = {valueA + valueB}
    </>
  );
}
