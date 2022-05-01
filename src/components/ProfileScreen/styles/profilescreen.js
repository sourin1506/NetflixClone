import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  color: white;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 800px;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h2`
  background-color: grey;
  padding: 15px;
  font-size: 15px;
  padding-left: 20px;
`;
export const Info = styled.div`
  display: flex;
`;
export const Details = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;
`;
export const Avatar = styled.img`
  height: 100px;
`;
export const Plans = styled.div`
  display: flex;
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  width: 100%;
  color: white;
  background-color: red;
`;
