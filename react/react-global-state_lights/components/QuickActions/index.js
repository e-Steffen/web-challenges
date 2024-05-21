import styled from "styled-components";
import Button from "../Button";
import useLightControlStore from "@/globalStore";
import { useState } from "react";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  onAllLightsOn,
  onAllLightsOff,
}) {
  const [sumOfTurnedOnLightsForQA, setSumOfTurnedOnLights] = useState(0);

  function countTurnedOnLights() {
    const count = lights.filter((light) => !light.isOn).length;
    setSumOfTurnedOnLights(count);
  }

  // useState(() => {
  //   countTurnedOnLights();
  // }, [lights]);

  const { checkAllOn, checkAllOff } = useLightControlStore();
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={checkAllOff(lights)}
        onClick={() => {
          onAllLightsOff();
          countTurnedOnLights();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={checkAllOn(lights)}
        onClick={() => {
          onAllLightsOn();
          countTurnedOnLights();
        }}
      >
        Turn all lights on
      </Button>
      <p> {sumOfTurnedOnLightsForQA} light(s) are on.</p>
    </StyledQuickActions>
  );
}
