import styled, { keyframes } from "styled-components";
import { CatchingPokemon } from "@styled-icons/material-outlined/CatchingPokemon";
import { Heart } from "@styled-icons/fa-regular/Heart";
import { Themoviedatabase } from "@styled-icons/simple-icons/Themoviedatabase";

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotate360 = keyframes`
	0% {
		top: 28px;
		left: 28px;
		width: 0;
		height: 0;
		opacity: 1;
    color: yellow;
	}

	100% {
		top: -1px;
		left: -1px;
		width: ${({ width }) => width};
		height: ${({ width }) => width};
		opacity: 0;
    color: red;
	}
`;

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  flex: 1;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5rem);
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
`;

export const LoadingTHMDB = styled(Themoviedatabase)`
  color: #fff;
  width: 60px;
  animation: ${Rotate} 2s ease-in-out infinite;

`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled(CatchingPokemon)`
  /* width: 20px; */
  color: red;
  animation: ${rotate360} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Dot = styled.div`
  background-color: #000;
  box-shadow: var(--shadow);
  border-radius: 50%;
  width: 0.9rem;
  height: 0.9rem;
  margin: 0 0.25rem;

  animation: ${BounceAnimation} 0.3s linear infinite;
  animation-delay: ${({ delay }) => `${delay}`};
`;

export const FavoriteAdd = styled(Heart)`
  width: 130px;
  color: #fff;
  animation: ${rotate360} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
