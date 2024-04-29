import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="color-card">
      <div className="theme-info">
        <p className="color-role">{color.role}</p>
        <p className="api-color-name">{color.name}</p>
        <p className="color-hex">{color.value}</p>
      </div>

      <div
        className="show-color"
        style={{ backgroundColor: color.value }}
      ></div>
    </article>
  );
}
