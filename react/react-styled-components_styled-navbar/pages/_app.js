import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  text-decoration-line: none;
  text-decoration: none;
`;

const StyledListItem = styled.li`
  // this is not part of the task, only for do some exercising
  background-color: lightgray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink href="/">Home</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="/about">About</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="/contact">Contact</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
