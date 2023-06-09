import styled, { keyframes, css } from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { Random } from "@styled-icons/open-iconic/Random";
import { Play2 } from "@styled-icons/icomoon/Play2";
import { AddCircle } from "@styled-icons/fluentui-system-regular/AddCircle";
import { Star } from "@styled-icons/boxicons-solid/Star";
import { Favorite } from "@styled-icons/material-twotone/Favorite";

const LeftFade = keyframes`
  0% { width: 0 }
  100% { width: 1000px;}
`;

const fadeIn = keyframes`
  from {opacity: 0 }
  to { opacity: 1 }
`;

const LikedEffect = keyframes`
  from { width: 20px } 
  to { width: 40px}
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.8;
  color: rgb(255, 255, 255);
  text-shadow: var(--text-shadow);
  position: absolute;
  left: 26%;
  top: 20px;
  padding: 10px 30px;
  border-radius: 999px;
  background: #fff;
  color: #000;
  opacity: 1;
`;

export const Container = styled.div`
  display: ${({ display }) => (display ? "none" : "block")};
  position: fixed;
  inset: 0;
  backdrop-filter: blur(20px);
  z-index: 4;
`;

export const Row = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  background: #83a4d4;
  background-image: url(${({ background }) => background });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  animation: ${LeftFade} 1s ease-out;
  box-shadow: var(--shadow);
  width: 1000px;
  height: 100vh;
  transition: width 2s linear;
  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CloseIcon = styled(CloseCircleOutline)`
  width: 30px;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 790px;
  top: 40px;
  &:hover {
    color: red;
  }
`;

export const CloseIcon2 = styled(CloseCircleOutline)`
  display: ${({ displayPlay }) => (displayPlay ? "none" : "unset")};
  width: 50px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 30%;
  left: 51%;
  transform: translate(-50%, -50%);
  &:hover {
    color: red;
  }
`;

export const RandomIcon = styled(Random)`
  width: 20px;
  color: var(--white);
  margin-left: 33px;
  cursor: pointer;
  position: absolute;
  right: 756px;
  top: 45px;
  &:hover {
    color: orange;
  }
`;

export const RowFavorite = styled.div`
  width: 56px;
  height: 37px;
  position: absolute;
  right: 34px;
  top: 30px;
  border: 1px solid white;
  border-radius: 18px;
  padding: 0px 10px 0 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  backdrop-filter: blur(10px);
`;

export const HeartIcon = styled(Favorite)`
  width: 20px;
  color: ${({ colorFavoriteIcon }) => (colorFavoriteIcon ? "red" : "white")};
  margin-right: 10px;
  cursor: pointer;
  &:active {
    animation: ${LikedEffect} 0.2s linear;
  }
`;

export const AddCircleIcon = styled(AddCircle)`
  width: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const Play2Icon = styled(Play2)`
  display: ${({ displayPlay }) => (displayPlay ? "unset" : "none")};
  width: 40px;
  color: white;
  right: 50px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  &:hover {
    color: red;
  }
`;

export const IFRAME = styled.iframe`
  display: ${({ displayPlay }) => (displayPlay ? "none" : "unset")};
  position: absolute;
  right: 0;
  bottom: 200px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  width: 550px;
  height: 300px;
  margin: 0 auto;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
`;

export const Genres = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 267px;
  top: 99px;
`;

export const Description = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
  border-radius: 14px;
  font-size: 16px;
  color: #fff;
  text-shadow: var(--text-shadow);
  padding: 20px 50px;
  backdrop-filter: blur(10px);
`;

export const StarIcon = styled(Star)`
  width: 20px;
  color: orange;
  margin-right: 4px;
  cursor: pointer;
  position: absolute;
  right: 807px;
  top: 103px;
  &:hover {
    color: orange;
  }
`;

export const Rated = styled.span`
  font-size: 15px;
  margin: 2px 10px 0px 5px;
  color: var(--white);
  position: absolute;
  right: 743px;
  top: 103px;
`;
