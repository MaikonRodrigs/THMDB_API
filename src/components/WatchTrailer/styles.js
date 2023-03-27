import styled from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

export const Container = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex: 1;
  backdrop-filter: blur(10px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: fixed;
  inset: 0;
  z-index: 999;
`;

export const CloseIcon = styled(CloseCircleOutline)`
  width: 60px;
  height: 60px;
  color: #fff;
  margin-bottom: 140px;
  z-index: 999;
  cursor: pointer;
`;
