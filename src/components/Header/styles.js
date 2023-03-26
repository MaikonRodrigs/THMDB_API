import styled from "styled-components";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";
import { Heart } from "@styled-icons/evaicons-solid/Heart";
import { Favorite } from "@styled-icons/material-twotone/Favorite";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";

export const Container = styled.div`
  width: 100%;
  z-index: 3;
  position: fixed;
  padding: 1.5rem 1rem;
  display: sticky;
  background: transparent;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
`;

export const RowImage = styled.div`
  margin-left: 2rem;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 10rem;
  height: auto;
`;
export const RowSearchAndProfile = styled.div`
  margin-right: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Themoviedatabase)`
  width: 5rem;
  height: auto;
  color: white;
  text-shadow: var(--text-shadow);
`;

export const RowFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid white;
  padding: 0 12px;
  margin-right: 20px;
`;

export const HeartIcon = styled(Favorite)`
  width: 20px;
  color: white;
  margin-right: 20px;
  cursor: pointer;
  /* &:hover {
    color: red;
  } */
`;

export const ArrowIcon = styled(ArrowIosDownward)`
  width: 20px;
  color: white;
  margin-left: -8px;
  cursor: pointer;

`;
