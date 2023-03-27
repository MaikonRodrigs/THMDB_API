import styled, { keyframes } from "styled-components";
import * as ICON from "@styled-icons/evil/Search";

const focusInput = keyframes`
  0% { width: 120px}
  100% { width: 200px }
`;

export const Container = styled.div``;

export const Form = styled.form`
  border: 1px solid var(--white);
  border-radius: 999px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  &:focus {
  }
`;

export const Input = styled.input`
  font-size: 15px;
  width: 150px;
  padding: 0 5px;
  background: transparent;
  color: var(--white);
  &::placeholder {
    color: var(--white);
  }
  &:focus {
    width: 200px;
    animation: ${focusInput} 0.3s linear;
  }
`;

export const SearchIcon = styled(ICON.Search)`
  width: 20px;
  color: var(--white);
  cursor: pointer;
`;
