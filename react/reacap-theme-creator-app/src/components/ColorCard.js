import "./ColorCard.css";

export default function ColorCard({ colorExample }) {
  return (
    <article className="color-card">
      <div className="info">
        <p className="color-role">{colorExample.role}</p>
        <p className="color-hex">{colorExample.value}</p>
      </div>

      <div
        className="show-color"
        style={{ backgroundColor: colorExample.value }}
      ></div>
    </article>
  );
}
