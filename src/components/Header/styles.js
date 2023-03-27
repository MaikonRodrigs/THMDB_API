import styled, { keyframes } from "styled-components";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";
import { Favorite } from "@styled-icons/material-twotone/Favorite";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { HeartDislikeCircle } from "@styled-icons/ionicons-sharp/HeartDislikeCircle";

const FadeAppear = keyframes`
  from { opacity: 0} to { opacity: 1}
`;

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
  margin-right: 20px;
  cursor: pointer;
  color: ${({ display }) => (display ? "red" : "white")};
`;

export const ArrowIcon = styled(ArrowIosDownward)`
  width: 20px;
  color: white;
  margin-left: -8px;
  cursor: pointer;
`;

export const ContainerFavorite = styled.div`
  display: ${({ display }) => (display ? "unset" : "none")};
  width: 300px;
  height: 700px;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  top: 70px;
  box-shadow: var(--shadow);

  animation: ${FadeAppear} 1s ease-in-out;
`;

export const NotInterestedIcon = styled(HeartDislikeCircle)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  padding: 44px 0;

  width: 40px;
  color: red;
`;
