import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const FirstSeaction = styled.section`
  height: 568px;
`;

export const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-auto-columns: auto;
  gap: 20px;
  max-width: 1366px;
  margin: 55px auto 0px;
  justify-content: start;
  justify-items: start;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto auto auto auto;
    margin-left: 40px;
    gap: 12px;
    row-gap: 50px;
  }
  
  @media screen and (max-width: 600px) {
    grid-template-columns: auto auto;
    margin: 0 auto;
    gap: 12px;
    row-gap: 50px;
  }
`;
