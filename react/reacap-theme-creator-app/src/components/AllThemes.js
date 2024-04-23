import "./AllThemes.css";
import { useState } from "react";
import SingleTheme from "./SingleTheme.js";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function AllThemes({ theme }) {
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
        <SingleTheme theme={theme} />
      ) : (
        <ThemePreview theme={theme} />
      )}
    </article>
  );
}
