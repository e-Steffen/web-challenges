import { useState, useEffect } from "react";
import "./ColorCard.css";

export default function ColorCard({ colorExample }) {
  const [colorFromApi, setColorFromApi] = useState("");

  useEffect(() => {
    async function loadColorFromApi() {
      try {
        const cleanHexValue = colorExample.value.replace("#", "");
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
        );
        const data = await response.json();
        setColorFromApi(data.name.value);
      } catch (error) {
        console.log(error);
      }
    }
    loadColorFromApi();
  }, [colorExample]);

  return (
    <article className="color-card">
      <div className="theme-info">
        <p className="color-role">{colorExample.role}</p>
        <p className="api-color-name">{colorFromApi}</p>
        <p className="color-hex">{colorExample.value}</p>
      </div>

      <div
        className="show-color"
        style={{ backgroundColor: colorExample.value }}
      ></div>
    </article>
  );
}
