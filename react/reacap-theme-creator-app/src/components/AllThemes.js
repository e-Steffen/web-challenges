import { themes } from "../db";
import Theme from "./Theme";
import "./AllThemes.css";

export default function AllThemes() {
  return (
    <>
      {themes.map((theme) => {
        return <Theme key={theme.id} theme={theme} />;
      })}
    </>
  );
}
