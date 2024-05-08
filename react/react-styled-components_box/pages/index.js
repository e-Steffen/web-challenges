import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const AlignItems = styled.div`
display: flex; 
justify-items: center;
`; 

export default function HomePage() {
  return (
    <AlignItems>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack={"black"} />
    </AlignItems>
  );
}

