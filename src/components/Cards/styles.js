import styled, { keyframes } from "styled-components";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";

const CardHover = keyframes`
0%{transform:translateZ(0) rotateY(0)}100%{transform:translateZ(-60px) rotateY(-360deg)}
`;

export const Container = styled.div``;

export const IconSearch = styled(Themoviedatabase)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 30px;
  color: #fff;
`;

export const Skeletoon = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 1.4rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: 0.2s ease-out;
  background-color: gray;
  animation: ${CardHover} 1.4s cubic-bezier(.455,.03,.515,.955) infinite;
`;

export const Card = styled.img`
  width: 150px;
  border-radius: 1.4rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.2s ease-out;
  background-color: gray;
  /* animation: ${CardHover} 1.4s cubic-bezier(.455,.03,.515,.955) both; */

  &:hover {
    margin-top: -16px;
  }
`;
