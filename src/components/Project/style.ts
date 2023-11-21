import styled from "styled-components";

export const ContainerGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    animation: images 1s ease-in-out;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @keyframes images {
    from {
      opacity: 1;
      translate: 0 100vh;
    }

    to {
      opacity: 0;
      translate: 0 0;
    }
  }
`;
