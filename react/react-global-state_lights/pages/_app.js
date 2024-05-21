import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import useLightControlStore from "@/globalStore";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function handleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const { checkAllOff } = useLightControlStore();

  return (
    <Layout isDimmed={checkAllOff(lights)}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onAllLightsOn={handleAllLightsOn}
        onAllLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
