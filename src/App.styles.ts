import styled from "styled-components";

export const Container = styled.div`
  background-color: #3f3f3f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 5rem 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 10rem;
`;

export const ScreenLoading = styled.div`
  text-align: center;

  .emoji {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat() (4, 1fr);
  gap: 0.5rem;
`;
