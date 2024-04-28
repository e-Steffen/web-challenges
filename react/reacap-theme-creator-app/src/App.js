import "./App.css";
import AllThemes from "./components/AllThemes";
import { themes } from "./db";
import NewThemeForm from "./components/NewThemeForm";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import TryPreviewPage from "./components/TryPreviewPage";

const initialThemes = themes;

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  async function handleAddTheme(newTheme) {
    setThemes([
      ...themes,
      {
        id: uuid(),
        ...newTheme,
      },
    ]);
  }

  async function loadColorNameFromApi(hex) {
    const cleanHexValue = hex.replace("#", "");
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
    );
    const data = await response.json();
    return data.name.value;
  }

  async function handleEditTheme(themeUpdate, id) {
    const colorNamePromises = themeUpdate.colors.map(async (color) => {
      const name = await loadColorNameFromApi(color.value);

      return {
        ...color,
        name,
      };
    });

    const colorsWithNames = await Promise.all(colorNamePromises);

    //   setThemes([
    //     ...themes,
    //     {
    //       id: uuid(),
    //       ...themeUpdate,
    //     },
    //   ]);

    setThemes(
      themes.map((theme) => {
        if (theme.id !== id) {
          return theme;
        }

        return {
          id,
          name: themeUpdate.name,
          colors: colorsWithNames,
        };
      })
    );
  }

  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  // async function handleTryTheme(id) {
  //   setThemes(themes.filter((theme) => theme.id === id));
  // }

  const [PreviewThemeId, setPreviewThemeId] = useState(null);
  const previewTheme = themes.find((theme) => theme.id === PreviewThemeId);

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
              onPreviewTheme={() => setPreviewThemeId(theme.id)}
              onDeleteTheme={() => handleDeleteTheme(theme.id)}
              onEditTheme={(themeUpdate) =>
                handleEditTheme(themeUpdate, theme.id)
              }
            />
          </section>
        ))}

        {PreviewThemeId !== null && (
          <TryPreviewPage
            theme={previewTheme}
            onClose={() => setPreviewThemeId(null)}
          />
        )}
      </main>
    </div>
  );
}
