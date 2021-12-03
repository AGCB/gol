import createBoard, { useInterval, gol } from "./helpers.js";
import React, { useState } from "react";
const styles = {
  board: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: { display: "flex" },
  square: {
    border: "1px dotted cyan",
    minWidth: "4px",
    minHeight: "4px",
    userSelect: "none",
  },
};

const Square = ({ x, y, activated, setBoard }) => {
  const activatedSquare = (
    <div style={{ backgroundColor: "cyan", paddingTop: "0px", color: "cyan" }}>
      _
    </div>
  );
  const nonActivatedSquare = (
    <div
      style={{ backgroundColor: "black", paddingTop: "0px", color: "black" }}
    >
      _
    </div>
  );
  const handleClick = (e) => {
    e.preventDefault();
    setBoard(createBoard());
  };
  return (
    <div onClick={handleClick} style={{ ...styles.square }}>
      {activated ? activatedSquare : nonActivatedSquare}
    </div>
  );
};

const LifeBoard = () => {
  const [board, setBoard] = useState(createBoard());

  // update board with random activations
  // useInterval(() => {
  //   setBoard(createBoard());
  // }, 1000);

  // update board with GOL algo
  useInterval(() => {
    setBoard(gol(board));
  }, 20);

  return (
    <div style={{ ...styles.board }}>
      {board.map((row, i) => {
        return (
          <div key={i} style={{ ...styles.row }}>
            {row.map((square, i) => {
              const { x, y, activated } = square;
              return (
                <Square
                  key={i}
                  x={x}
                  y={y}
                  activated={activated}
                  setBoard={setBoard}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LifeBoard;
