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
    animation: cycle 0.2s infinite ease-in-out;

    @keyframes cycle {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const PhotoList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-block: 1rem;
`;

export const UploadForm = styled.form`
  background-color: #633593;
  padding: 1rem;
  border-radius: 5px;

  input[type="submit"] {
    background-color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  button {
    background-color: #9450de;
  }
`;
