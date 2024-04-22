import "./AllThemes.css";
import { useState } from "react";
import SingleTheme from "./SingleTheme.js";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function AllThemes({ theme }) {
  const [detailView, checkDetailState] = useState(false);

  function toggleView() {
    checkDetailState(!detailView);
  }

  return (
    <article className="theme-overview">
      <button className="view-toggle" onClick={toggleView}>
        {detailView ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      {detailView ? <SingleTheme theme={theme} /> : <ThemePreview theme={theme} />}
    </article>
  );
}
