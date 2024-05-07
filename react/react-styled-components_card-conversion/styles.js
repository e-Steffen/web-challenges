import { createGlobalStyle } from "styled-components";
import { Great_Vibes, VT323 } from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const Font_VT323 = VT323({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${Font_VT323.style.fontFamily};
    font-size: 1.5rem;
    line-height: 1.5;
  }

  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 8px;
    
  }
`;
