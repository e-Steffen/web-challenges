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

  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  return (
    <div className="Theme-Creator-App">
      <header className="App-header">
        <h1>Theme Creator</h1>
      </header>
      <main className="theme-selection">
        <NewThemeForm onAddTheme={handleAddTheme} />

        {themes.map((theme) => (
          <section key={theme.id}>
            {" "}
            <AllThemes
              key={theme.id}
              theme={theme}
              name={theme.name}
              onDeleteTheme={() => handleDeleteTheme(theme.id)}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
