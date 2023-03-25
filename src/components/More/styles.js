import styled, { keyframes } from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

const WIDTH = 1000;

const LeftFade = keyframes`
  0% {width: 0 }
  100% { width: ${WIDTH}px }
`;

const fadeIn = keyframes`
  0% {right: 0px }
  100% { right: 794px }
`;

const opacity = keyframes`
  0% {opacity: 0 }
  100% { opacity: 1 }
`;

const BackgroundFade = keyframes`
  0% { backdrop-filter: blur(0) }
  100% { backdrop-filter: blur(2rem)}
`;

export const Contents = styled.section`
  position: relative;
`;

export const Container = styled.div`
  display: ${({ display }) => (display ? "none" : "block")};

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

  background-image: url(${({ background }) => background});
  /* background: linear-gradient(to bottom, #83a4d4, #b6fbff); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  filter: opacity(80%);

  box-shadow: var(--shadow);
  width: ${WIDTH}px;
  height: 100vh;

  transition: width 2s linear;
  animation: ${LeftFade} 1s ease-out;

  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CloseIcon = styled(CloseCircleOutline)`
  width: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    color: red;
  }

  position: absolute;
  right: 794px;
  top: 30px;
  z-index: 19;
  animation: ${fadeIn} 1.4s ease-out;
`;

export const RowCard = styled.div`
  margin-bottom: 70px;
  margin-left: 120px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  z-index: 11;
  font-size: 50px;
  font-weight: 600;
  opacity: 0.8;
  color: rgb(255, 255, 255);


  position: absolute;
  left: 731px;
  bottom: 705px;
  text-shadow: var(--text-shadow);
  transform: rotate(279.6deg);

  position: absolute;
  right: 794px;
  top: 30px;
  z-index: 19;
`;
