import styled from "styled-components";
import Select from "react-select";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cell = styled.div`
  background-color: ${({ chosed1, chosed2 }) =>
    (chosed1 && "green") || (chosed2 && "yellow")};
  width: ${({ dimension, size }) => `${dimension / size}px`};
  height: ${({ dimension, size }) => `${dimension / size}px`};
  border: 1px solid red;
  box-sizing: border-box;
`;

export const FieldStyled = styled.div`
  width: ${({ dimension }) => `${dimension + 2}px`};
  height: ${({ dimension }) => `${dimension + 2}px`};
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const SelectStyled = styled(Select)`
  margin-bottom: 10px;
`;
