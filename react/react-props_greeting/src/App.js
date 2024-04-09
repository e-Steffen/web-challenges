import "./styles.css";

export default function App() {
  return (
    <h1>
      <Greeting name="Roland" />
      <br></br>
      <Greeting name="Sam" />
    </h1>
  );
}

function Greeting({ name }) {
  return <>Hello, {name === "Roland" ? "Coach" : name}!</>;
}
