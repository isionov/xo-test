import React, { useState, useLayoutEffect } from "react";

import { Title } from "./Title";
import { Row } from "./Row";
import { WrapperStyled, FieldStyled, SelectStyled } from "./styles";
import { size, dimension } from "./constants";
import { checkAllPersons, objKeyLength } from "./utils";

const options = [
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

export const Field = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [winner, setWinner] = useState(null);
  const [state, setState] = useState({});
  const [length, setLength] = useState(options[0]);

  useLayoutEffect(() => {
    const winner = checkAllPersons(state, size, length.value);
    console.log("FINAL", winner);
    if (winner === 0 || winner === 1) setWinner(winner + 1);
  }, [state, length]);

  const onClick = (e) => {
    if (winner !== null) return;
    if (state[e.target.id] === undefined) {
      setState({ ...state, [e.target.id]: currentPerson });
      setCurrentPerson((currentPerson + 1) % 2);
    }
  };

  return (
    <WrapperStyled>
      <Title winner={winner} person={currentPerson} />
      <SelectStyled
        isDisabled={!!objKeyLength(state)}
        value={length}
        onChange={setLength}
        options={options}
      />
      <FieldStyled dimension={dimension}>
        {Array.from(Array(size)).map((_, row) => {
          return (
            <Row
              onClick={onClick}
              state={state}
              dimension={dimension}
              size={size}
              row={row}
            />
          );
        })}
      </FieldStyled>
    </WrapperStyled>
  );
};
