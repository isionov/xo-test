import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h3`
  margin-bottom: 10px;
`;

export const Title = ({ person, winner }) => {
  return (
    <TitleStyled>
      {winner === null ? `Ходит: ${person + 1}` : `Победил: ${winner}`}
    </TitleStyled>
  );
};
