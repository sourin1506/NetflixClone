import styled from "styled-components";
export const Header = styled.header`
  color: white;
  object-fit: contain;
  width: 100%;
  min-height: 50vh;
`;
export const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 480px;

  height: 80px;
`;
export const Container = styled.div`
  margin-left: 20px;
  padding-top: 140px;
  height: 50vh;
`;
export const Name = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 10px;
`;
export const ButtonGroup = styled.div``;
export const Button = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;

  &:hover {
    color: black;
    background: white;
    transition: all 0.2s;
  }
`;
export const FadeBottom = styled.div`
  height: 100px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
