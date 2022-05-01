import styled from "styled-components";

export const Rows = styled.div`
  color: white;
`;
export const Title = styled.h2`
  margin-left: 30px;
  padding: 20px;
  padding: ${(props) => (props.islarge ? 5 : 15)}px;
`;
export const Poster = styled.img`
  /* object fit keeps the resolution correct "preserve that aspect ratio" */
  object-fit: contain;
  width: 100%;
  /* max hegith so that we can reduce height min width: so that we can give max/min width but anythong work height or width ;*/

  //margin-right: 30px;
  transition: transform 550ms;

  &:hover {
    transform: ${(props) => (props.islarge ? `scale(1.2)` : `scale(1.1)`)};
  }
  max-width: ${(props) => (props.islarge ? 200 : 250)}px;
  max-height: ${(props) => (props.islarge ? 250 : 150)}px;
  margin-left: ${(props) => (props.islarge ? 0 : 3)}px;
  margin-right: ${(props) => (props.islarge ? 20 : 12)}px;
`;

export const Posters = styled.div`
  display: flex;
  /*so that we can scroll sideway*/
  align-items: center;
  height: ${(props) => (props.islarge ? 350 : 170)}px;

  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    /* tell ui to not display scrollbar but we should keep the funtionality */
    display: none;
  }
`;
export const Loader = styled.div`
  object-fit: contain;

  /* max hegith so that we can reduce height min width: so that we can give max/min width but anythong work height or width ;*/
  background-color: white;
  //margin-right: 30px;

  width: 100px;
  height: 200px;
  margin-bottom: 20px;
`;
