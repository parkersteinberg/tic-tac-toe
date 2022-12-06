//Box.jsx
import React from 'react';

// Build component 'Box' and render to page
const Box = (props) => {
  return (
    <div>
      <button
        className="button"
        id={`r${props.row}c${props.column}`}
        // onClick={(e) => {
        //   props.changeButtonVal(e);
        //   props.checkForWinner();
        // }}
        onClick={props.changeButtonVal}
      >
        {props.buttonVal}
      </button>
    </div>
  );
};

export default Box;
