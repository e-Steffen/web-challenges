import ColorCard from "./ColorCard";
import "./ThemeDetail.css";

export default function ThemeDetail({ theme }) {
  return (
    <article className="theme-detail-view">
      {/* <h2>{theme.name}</h2> */}
      {theme.colors.map((color) => (
        <ColorCard key={color.value} color={color} />
      ))}
      
    </article>
  );
}
