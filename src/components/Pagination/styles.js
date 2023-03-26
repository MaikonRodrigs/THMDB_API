import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 40px;
  margin-top: 50px;
  margin-bottom: -30px;
`;

export const Next = styled(ArrowRightCircle)`
  width: 30px;
  cursor: pointer;
  color: #fff;
  z-index: 999;
  &:hover {
    color: orange;
  }
`;
export const Previous = styled(ArrowLeftCircle)`
  z-index: 999;
  width: 30px;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: orange;
  }
`;
