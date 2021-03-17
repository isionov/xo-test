import React from "react";

import { Cell } from "./styles";

export const Row = ({ row, state, onClick, dimension, size }) => {
  return Array.from(Array(size)).map((_, column) => {
    const id = `${row}-${column}`;

    return (
      <Cell
        chosed1={state[id] === 0}
        chosed2={state[id] === 1}
        id={id}
        onClick={onClick}
        dimension={dimension}
        size={size}
      />
    );
  });
};
