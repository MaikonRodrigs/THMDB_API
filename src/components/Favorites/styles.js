import styled, { keyframes } from "styled-components";
import { AddCircle } from "@styled-icons/fluentui-system-regular/AddCircle";
import { Trash } from "@styled-icons/ionicons-sharp/Trash";

const FadeAppear = keyframes`
  from { opacity: 0} to { opacity: 1}
`;

export const Row = styled.div``;
export const Icons = styled.div``;

export const Container = styled.div`
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

export const Title = styled.div`
  font-size: 14px;
  text-align: right;
  width: 180px;
  text-shadow: var(--text-shadow);
  font-weight: bold;
`;

export const Card = styled.img`
  background: gray;
  background-image: url(${({ img }) => img});
  width: 80px;
  height: 120px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const RowIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AddCircleIcon = styled(AddCircle)`
  width: 20px;
  color: #000000;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const TrashIcon = styled(Trash)`
  width: 20px;
  color: red;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    opacity: 0.7;
  }
`;
