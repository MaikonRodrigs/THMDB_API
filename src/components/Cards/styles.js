import styled, { keyframes } from "styled-components";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";

const CardHover = keyframes`

`;

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  margin-top: 50px;
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 40px;
  width: 1280px;
  display: flex;
  justify-content: flex-start; */

  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-auto-columns: auto;
  gap: 2rem;
  max-width: 1366px;
  /* width: 1280px; */
  margin: 55px auto 0px;
  justify-content: start;
  justify-items: start;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto auto auto auto;
    margin-left: 40px;
    gap: 1.2rem;
    row-gap: 5rem;
  }
`;

export const IconSearch = styled(Themoviedatabase)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 30px;
  color: #fff;
`;

export const Card = styled.img`
  width: 150px;
  border-radius: 1.4rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: 0.2s ease-out;

  &:hover {
    margin-top: -16px;
  }
`;
