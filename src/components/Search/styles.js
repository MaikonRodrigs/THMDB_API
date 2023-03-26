import styled, { keyframes } from "styled-components";
import * as ICON from "@styled-icons/evil/Search";

const focusInput = keyframes`
  0% {
    width: 12rem;
  }
  100% {
    width: 20rem;
  }
`;

export const Container = styled.div``;

export const Form = styled.form`
  border: 1px solid var(--white);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  &:focus {
  }
`;

export const Input = styled.input`
  font-size: 15px;
  width: 15rem;
  padding: 0 5px;
  background: transparent;
  color: var(--white);
  &::placeholder {
    color: var(--white);
  }

  &:focus {
    width: 20rem;
    animation: ${focusInput} 0.3s linear;
  }
`;

export const SearchIcon = styled(ICON.Search)`
  width: 2rem;
  color: var(--white);
  cursor: pointer;
`;
