import { LightButton } from "@/components/Light/Light.styled";
import Link from "../components/Link";
import QuickActions from "../components/QuickActions";
import { useState } from "react";

export default function Actions({ lights, onAllLightsOn, onAllLightsOff }) {
  // const [sumOfTurnedOnLightsForQA, setSumOfTurnedOnLights] = useState();

  // function countTurnedOnLights() {
  //   const count = lights.filter((light) => light.isOn).length;
  //   setSumOfTurnedOnLights(count);
  // }

  // useState(() => {
  //   countTurnedOnLights();
  // }, [lights]);

  return (
    <>
      <Link href="/">← Zurück zur Startseite</Link>
      <h1>Schnellaktionen</h1>
      <QuickActions
        onAllLightsOff={onAllLightsOff}
        onAllLightsOn={onAllLightsOn}
        lights={lights}
      />
      {/* <p> {sumOfTurnedOnLightsForQA} light(s) are on.</p> */}
    </>
  );
}
