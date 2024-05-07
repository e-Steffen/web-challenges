import { createGlobalStyle } from "styled-components";
import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"]});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${GreatVibes.style.fontFamily};
  }
`;
