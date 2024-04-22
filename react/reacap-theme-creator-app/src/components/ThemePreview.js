import "./ThemePreview.css";

export default function ThemePreview({ theme }) {
  return (
    <article className="preview">
      <h2>{theme.name}</h2>
      {theme.colors.map((color) => (
        <div
          key={color.value}
          className="show-preview-color"
          style={{ backgroundColor: color.value }}
        ></div>
      ))}
    </article>
  );
}
