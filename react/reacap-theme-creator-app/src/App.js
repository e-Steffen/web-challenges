import "./App.css";
import AllThemes from "./components/AllThemes";
import { themes } from "./db";

export default function App() {
  return (
    <div className="Theme-Creator-App">
      <header className="App-header">
        <h1>Theme Creator</h1>
      </header>
      <main className="theme-selection">
        {themes.map((theme) => {
          return <AllThemes key={theme.id} theme={theme} name={theme.name} />;
        })}
      </main>
    </div>
  );
}
