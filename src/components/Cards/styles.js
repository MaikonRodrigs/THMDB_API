import styled, { keyframes } from "styled-components";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";

const CardHover = keyframes`

`;

export const Container = styled.div`
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
