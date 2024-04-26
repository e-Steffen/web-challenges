import "./EditThemeForm.css";

const exampleTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#f54848" },
    { role: "secondary", value: "#f4e4c6" },
    { role: "surface", value: "#9e9ec4" },
    { role: "surface-on", value: "#09bc18" },
  ],
};

export default function EditThemeForm({
  onApplyEditTheme,
  initialData = exampleTheme,
}) {
  function handleEditTheme(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();

    const themeUpdate = {
      id: data.id,
      name: data.name,
      colors: initialData.colors.map((color) => ({
        role: color.role,
        value: data[color.role],
      })),
    };

    onApplyEditTheme(themeUpdate);
  }

  return (
    <form onSubmit={handleEditTheme} className="theme-form">
      <label htmlFor="name" className="edit-theme-form__label">
        Time for change? Change it!
      </label>
      <input
        className="theme-form__edit-name-inputfield"
        type="text"
        required
        name="name"
        placeholder="Do you like to change the name of your theme?"
      />
      <fieldset className="edit-theme-form__color-preview">
        {initialData.colors.map((exampleColor) => (
          <input
            type="color"
            key={exampleColor.role}
            className="theme-form__show-preview-color"
            name={exampleColor.role}
            defaultValue={exampleColor.value}
          />
        ))}
      </fieldset>

      <button
        type="submit"
        title="edit Theme"
        className="view-toggle, theme-form__apply-changes-button"
      >
        Style refreshed? Apply changes!
      </button>
    </form>
  );
}
