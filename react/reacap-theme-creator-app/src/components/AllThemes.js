import "./AllThemes.css";
import "./EditThemeForm.css";
import { useState } from "react";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ThemeDetail from "./ThemeDetail.js";
import EditThemeForm from "./EditThemeForm.js";

export default function AllThemes({
  theme,
  onDeleteTheme,
  onEditTheme,
  onPreviewTheme,
}) {
  const [detailView, setDetailView] = useState(false);

  function toggleView() {
    setDetailView(!detailView);
  }

  const [editView, setEditView] = useState(false);
  function toggleEditView() {
    setEditView(!editView);
  }

  // const previewTheme = themes.map((theme) => theme.id === PreviewThemeId);

  // const [PreviewThemeId, setPreviewThemeId] = useState(null);
  // function toggleTryPreview() {
  //   setPreviewThemeId(theme.id);
  // }

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
            title="try-out-button"
            className="theme-form__try-out-button"
            onClick={onPreviewTheme}
          >
            Try, try, try
          </button>

          <button
            type="button"
            title="delete Theme"
            className="theme-form__delete-button"
            onClick={() => onDeleteTheme(theme.id)}
          >
            Looks ugly? Delete it!
          </button>

          {/* {tryPreview ? (
            <>
              <TryPreviewPage
              // onTryTheme={onTryTheme}
              // {(tryTheme) => {
              //   onTryTheme(tryTheme);
              // }}
              />

              <button
                className="view-toggle, theme-form__try-out-button"
                onClick={onClose}
              >
                Close Preview
              </button>
            </>
          ) : (
            <button
              type="button"
              title="try-out-button"
              className="theme-form__try-out-button"
              onClick={onPreviewTheme}
              // onClick={() => onTryTheme(theme.id)}
            >
              Try, try, try
            </button>
          )} */}

          {editView ? (
            <>
              <EditThemeForm
                onApplyEditTheme={(themeUpdate) => {
                  onEditTheme(themeUpdate);
                }}
                initialData={theme}
              />

              <button
                className="view-toggle, theme-form__edit-button"
                onClick={toggleEditView}
              >
                Close Edit Mode
              </button>
              {/* <button
                type="submit"
                title="edit Theme"
                className="view-toggle, theme-form__edit-button"
                onClick={() => onEditTheme(theme.id)}
              >
                Style refreshed? Apply changes!
              </button> */}
            </>
          ) : (
            <button
              className="view-toggle, theme-form__edit-button"
              onClick={toggleEditView}
            >
              Edit Mode
            </button>
          )}
        </div>
      ) : (
        <ThemePreview theme={theme} />
      )}
    </article>
  );
}
