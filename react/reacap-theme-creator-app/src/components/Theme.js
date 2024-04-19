import ColorCard from "./ColorCard";
import "./Theme.css";

export default function Theme({ theme }) {
  return (
    <>
      <h2>{theme.name}</h2>
      {theme.colors.map((color) => (
        <ColorCard key={color.value} colorPreview={color} />
      ))}
    </>
  );
}
