import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";

export const Container = styled.div`
  display: flex;
  gap: 1px;
  margin-left: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1200px) {
    margin-left: 48px;
  }
`;

export const Next = styled(ArrowRightCircle)`
  width: 30px;
  cursor: pointer;
  color: #fff;
  z-index: 999;
  margin-left: 10px;
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

export const Page = styled.div`
  color: white;
  font-size: 14px;
  border: 2px solid #fff;
  width: 6px;
  height: 6px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  margin-left: 20px;
`;
