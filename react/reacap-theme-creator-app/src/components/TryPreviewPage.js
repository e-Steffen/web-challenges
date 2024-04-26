import { themes } from "../db";
import "./TryPreviewPage.css";

export default function TryPreviewPage({ onTryTheme }) {
  return (
    <article className="try-preview">
      {themes.map((theme) => (
        <h1 key={theme.colors.role} className="try-preview__title">
          {theme.name}
        </h1>
      ))}
    </article>
  );
}
