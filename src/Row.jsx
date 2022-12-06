//Row.jsx
import React from 'react';
import Box from './Box.jsx';

const Row = (props) => {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(
      <Box
        key={props.row + `${i}`}
        row={props.row}
        column={i}
        buttonVal={props.board[`r${props.row}c${i}`]}
        changeButtonVal={props.changeButtonVal}
        checkForWinner = {props.checkForWinner}
      />
    );
  }

  return <div className="row">{boxes}</div>;
};

export default Row;
