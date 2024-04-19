import "./ColorCard.css";

export default function ColorCard({ colorPreview }) {
  return (
    <article className="color-card">
      <div className="info">
        <p className="color-role">{colorPreview.role}</p>
        <p className="color-hex">{colorPreview.value}</p>
      </div>

      <div
        className="show-color"
        style={{ backgroundColor: colorPreview.value }}
      ></div>
    </article>
  );
}
