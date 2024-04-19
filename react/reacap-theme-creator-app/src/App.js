import "./App.css";




import AllThemes from "./components/AllThemes";

export default function App() {
  return (
    <div className="Theme-Creator-App">
      <header className="App-header">
        <h1>Theme Creator</h1>
      </header>
      <main className="theme-selection">
        <AllThemes />
      </main>
    </div>
  );
}
