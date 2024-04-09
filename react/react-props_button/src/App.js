import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button
        text="Click!"
        color="orange"
        disabled={false}
        buttonClick={actionOnButtonClick}
      />
    </>
  );
}

function Button({ text, color, disabled, buttonClick }) {
  return (
    <button
      onClick={buttonClick}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function actionOnButtonClick() {
  console.log("Wow, the button was clicked.");
}
