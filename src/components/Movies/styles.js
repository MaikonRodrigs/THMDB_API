import styled, { css } from "styled-components";
import { Star } from "@styled-icons/boxicons-solid/Star";
import { Heart } from "@styled-icons/evaicons-solid/Heart";
import { Play } from "@styled-icons/foundation/Play";
import { LeftArrowAlt } from "@styled-icons/boxicons-solid/LeftArrowAlt";
import { Search } from "@styled-icons/evil/Search";

export const SectionResults = styled.div``;

export const Container = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: top center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 768px;
  padding-bottom: 15px;
  clip-path: polygon(0% 0, 100% 0%, 100% calc(100% - 120px), 0% 100%);
`;

export const Row = styled.div`
  position: relative;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  height: 768px;
  padding-bottom: 15px;
  clip-path: polygon(0% 0, 100% 0%, 100% calc(100% - 120px), 0% 100%);
`;

export const Content = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding-top: 200px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  z-index: 11;
  font-size: 60px;
  font-weight: 600;
  opacity: 0.5;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 33px;
`;

export const Description = styled.span`
  font-size: 15px;
  margin-left: 10px;
  text-align: left;
  width: 60%;
  color: white;
`;

export const LeftIcon = styled(LeftArrowAlt)`
  width: 30px;
  height: 30px;
  color: var(--white);
  border-radius: 99px;
  padding: 5.3px;
  border: 1px solid #fff;
  margin-left: 33px;
  margin-right: -15px;
  cursor: pointer;
  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;

export const SearchIcon = styled(Search)`
  width: 25px;
  color: var(--white);
  cursor: pointer;
  margin-left: 33px;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FoundItems = styled.span`
  font-size: 14px;
  color: white;
  margin-right: 40px;
`;
