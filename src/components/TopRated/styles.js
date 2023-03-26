import styled, { css } from "styled-components";
import { Star } from "@styled-icons/boxicons-solid/Star";
import { Heart } from "@styled-icons/evaicons-solid/Heart";
import { Play } from "@styled-icons/foundation/Play";
import { Random } from "@styled-icons/open-iconic/Random";
import { LeftArrowAlt } from "@styled-icons/boxicons-solid/LeftArrowAlt";

const BUTTON = css`
  color: var(--white);
  border: 0.1rem solid var(--white);
  padding: 1rem 4rem;
  text-transform: uppercase;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    border: 1px solid var(--white);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ICONSBUTTONS = css`
  width: 20px;
  color: var(--white);
`;

export const Container = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: top center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vmax;
  height: 768px;
  padding-bottom: 15px;
  clip-path: polygon(0% 0, 100% 0%, 100% calc(100% - 120px), 0% 100%);
`;

export const Row = styled.div`
  position: relative;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(0, 0, 0, 0.7);
  width: 99.9vmax;
  height: 768px;
  padding-bottom: 15px;
  clip-path: polygon(0% 0, 100% 0%, 100% calc(100% - 120px), 0% 100%);
`;

export const Content = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding-top: 20rem;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  z-index: 11;
  font-size: 60px;
  font-weight: 600;
  /* word-break: keep-all; */
  /* word-wrap: normal; */
  opacity: 0.5;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 33px;
`;

export const RowInformation = styled.div`
  margin-top: -20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

export const Butttons = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  display: flex;
  gap: 2rem;
`;
export const Rated = styled.span`
  font-size: 1.5rem;
  margin: 2px 10px 0 5px;
  color: var(--white);
`;

export const Year = styled.span`
  border: 1px solid var(--white);
  padding: 0.3rem 2rem;
  border-radius: 99px;
  font-size: 1.5rem;
  color: var(--white);
  margin-left: 10px;
`;

export const AddFavorites = styled.button`
  ${BUTTON}
`;
export const WatchTrailer = styled.button`
  ${BUTTON}
`;

export const Description = styled.span`
  font-size: 1.5rem;
  display: block;
  margin-left: 40px;
  text-align: left;
  width: 60%;
  color: white;
  margin-top: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  color: ${({ rated }) => (rated ? "rgba(255, 255, 255, 0.1)" : "orange")};
  margin-right: 4px;
`;

export const LikedIcon = styled(Heart)`
  ${ICONSBUTTONS}
`;

export const PlayIcon = styled(Play)`
  ${ICONSBUTTONS}
`;

export const RandomIcon = styled(Random)`
  ${ICONSBUTTONS}
  border-radius: 99px;
  padding: 10px;
  border: 1px solid #fff;
  margin-left: 33px;
  cursor: pointer;
  &:hover {
    color: greenyellow;
    border: 1px solid greenyellow;
  }
`;

