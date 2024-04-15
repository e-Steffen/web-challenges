import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);
  function setCountPlus() {
    setCount(count + 1);
  }
  function setCountMinus() {
    setCount(count - 1);
  }
  return (
    <Counter
      count={count}
      setCountPlus={setCountPlus}
      setCountMinus={setCountMinus}
    />
  );
}
