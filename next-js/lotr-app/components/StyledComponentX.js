import Image from "next/image";
import styled from "styled-components";

export default function StyledComponentX({ cover, title }) {
  return (
    <ImageConti>
      <StyledImage src={cover} alt={title} fill />
    </ImageConti>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageConti = styled.div`
  position: relative;
  height: 225px;
`;
