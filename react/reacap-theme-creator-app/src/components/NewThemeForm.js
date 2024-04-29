import "./NewThemeForm.css";
import ColorPicker from "./ColorPicker";

const exampleTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#f54848" },
    { role: "secondary", value: "#f4e4c6" },
    { role: "surface", value: "#9e9ec4" },
    { role: "surface-on", value: "#09bc18" },
  ],
};

export default function NewThemeForm({
  onAddTheme,
  initialData = exampleTheme,
}) {
  function handleAddTheme(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // onAddTheme(data);

    const newTheme = {
      id: data.id,
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onAddTheme(newTheme);
    event.target.reset();
  }

  return (
    <form onSubmit={handleAddTheme} className="theme-form">
      <label htmlFor="name" className="theme-form__label">
        Add a awesome Theme!
      </label>
      <input
        className="theme-form__name-inputfield"
        type="text"
        required
        name="name"
        placeholder="If you like to add it, name it!"
      />
      <fieldset className="theme-form__color-preview">
        {initialData.colors.map((color) => (
          <ColorPicker key={color.role} color={color} />
        ))}
      </fieldset>

      <button type="submit" className="theme-form__submit-button">
        Add a awesome Theme!
      </button>
    </form>
  );
}
