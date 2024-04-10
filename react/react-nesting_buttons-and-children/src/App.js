import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>first click</Button>
      <Button>Second!</Button>
      <Button>I am third!</Button>
      <Button>Last but not least</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
