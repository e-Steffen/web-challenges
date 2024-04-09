import "./styles.css";

export default function App() {
  return (
    <h1>
      <Greeting name="August" />
    </h1>
  );
}

function Greeting({ name }) {
  return <>`Hello, ${name}!`</>;
}
