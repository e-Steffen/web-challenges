import "./App.css";
import AllThemes from "./components/AllThemes";
import { themes } from "./db";
import NewThemeForm from "./components/NewThemeForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const initialThemes = themes;

export default function App() {
  const [themes, setThemes] = useState(initialThemes);
  function handleAddTheme(newTheme) {
    setThemes([
      ...themes,
      {
        id: uuid(),
        ...newTheme,
      },
    ]);
  }

  return (
    <div className="Theme-Creator-App">
      <header className="App-header">
        <h1>Theme Creator</h1>
      </header>
      <main className="theme-selection">
        <NewThemeForm onAddTheme={handleAddTheme} />
        {themes.map((theme) => (
          <AllThemes key={theme.id} theme={theme} name={theme.name} />
        ))}
      </main>
    </div>
  );
}
