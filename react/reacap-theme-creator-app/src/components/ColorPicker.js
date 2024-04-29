import { useState } from "react";
import "./ColorPicker.css";
import "./NewThemeForm.css";

export default function ColorPicker({ color }) {
  const [colorValue, setColorValue] = useState(color.value);

  function handleColorInterdependence(event) {
    setColorValue(event.target.value);
  }

  return (
    <section>
      <input
        type="color"
        id={color.role}
        key={color.role}
        className="theme-form__show-preview-color"
        name={color.role}
        value={colorValue}
        onChange={handleColorInterdependence}
      />

      <input
        type="text"
        key={color.value}
        className="colorPicker__text-input"
        name={color.role}
        value={colorValue}
        onChange={handleColorInterdependence}
      />
    </section>
  );
}
