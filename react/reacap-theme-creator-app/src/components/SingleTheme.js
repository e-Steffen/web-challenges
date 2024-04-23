import ColorCard from "./ColorCard";
import "./SingleTheme.css";

export default function SingleTheme({ theme }) {
  return (
    <article className="detail-view">
      {/* <h2>{theme.name}</h2> */}
      {theme.colors.map((color) => (
        <ColorCard key={color.value} colorExample={color} />
      ))}
    </article>
  );
}
