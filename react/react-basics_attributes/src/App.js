import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Text of my choice</h2>
      <label htmlFor="myInput">Input Field</label>
      <input id="myInput"></input>
      <a
        className="article__link"
        rel="noreferrer"
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
      >
        MDN: Getting started with React
      </a>
    </article>
  );
}
