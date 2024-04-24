import "./AllThemes.css";
import { useState } from "react";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ThemeDetail from "./ThemeDetail.js";

export default function AllThemes({ theme, onDeleteTheme }) {
  const [detailView, setDetailView] = useState(false);

  function toggleView() {
    setDetailView(!detailView);
  }

  return (
    <article className="theme-overview">
      <button className="view-toggle" onClick={toggleView}>
        {detailView ? <IconChevronUp /> : <IconChevronDown />}
        {theme.name}
      </button>
      {detailView ? (
        <div className="theme-detail-view">
          <ThemeDetail theme={theme} />

          <button
            type="button"
            title="delete Theme"
            className="theme-form__delete-button"
            onClick={() => onDeleteTheme(theme.id)}
          >
            Looks ugly? Delete it!
          </button>
        </div>
      ) : (
        <ThemePreview theme={theme} />
      )}
    </article>
  );
}
