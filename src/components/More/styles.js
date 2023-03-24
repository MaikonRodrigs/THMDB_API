import styled, { keyframes } from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

const WIDTH = 700

const LeftFade = keyframes`
  0% {width: 0 }
  100% { width: ${WIDTH}px }
`;

const BackgroundFade = keyframes`
  0% { backdrop-filter: blur(0) }
  100% { backdrop-filter: blur(2rem)}
`;

export const Container = styled.div`
  display: ${({ display }) => (display ? "none" : "block")};
  /* display: block; */
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vmax;
  height: 1200px;
  backdrop-filter: blur(2rem);
  animation: ${BackgroundFade} 3s ease-out;
  z-index: 9990;
`;

export const Row = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;

  background: linear-gradient(to bottom, #83a4d4, #b6fbff);
  box-shadow: var(--shadow);
  width: ${WIDTH}px;
  height: 100vh;

  transition: width 2s linear;
  animation: ${LeftFade} 1s ease-out;
`;

export const CloseIcon = styled(CloseCircleOutline)`
  width: 30px;
  color: white;
  margin: 20px;
  cursor: pointer;
`;
