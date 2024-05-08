import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${({ isBlack }) => {
    return isBlack ? isBlack : "green";
  }};
  margin: 2rem;
  display: flex;

  &:hover {
    background-color: red;
  }
`;
