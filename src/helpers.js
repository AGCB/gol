import { useEffect, useRef } from "react";

export const createBoard = (size = 90) => {
  let board = [];
  let iterator = Array.from(Array(size).keys());
  iterator.forEach((x) => {
    let row = [];
    iterator.forEach((y) => {
      row.push({
        x: x,
        y: y,
        activated: Math.random() > 0.7,
      });
    });
    board.push(row);
  });
  //
  let permutation1 = () => {
    board[10][10].activated = true;
    board[11][10].activated = true;
    board[12][10].activated = true;
    board[10][11].activated = true;
    board[11][12].activated = true;
    board[12][13].activated = true;
    board[11][10].activated = true;
    board[12][30].activated = true;
    board[13][21].activated = true;
    board[14][20].activated = true;
    board[13][22].activated = true;
  };
  permutation1();
  return board;
};

export default createBoard;

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const gol = (initialBoard) => {
  let newBoard = [...initialBoard];
  const MNO = [
    [-1, 0],
    [-1, 0],
    [-1, 1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, -1],
    [0, 1],
  ];
  initialBoard.forEach((row, rowIndex) => {
    console.log("for each row", row, rowIndex);
    row.forEach((square, squareIndex) => {
      console.log("for each square");
      let total = 0;
      MNO.forEach((offset) => {
        let validSquare =
          initialBoard[rowIndex + offset[0]] &&
          initialBoard[rowIndex + offset[0]][squareIndex + offset[1]];
        if (validSquare && validSquare.activated) {
          total++;
        }
      });
      const currentSquareIsActivated =
        initialBoard[rowIndex][squareIndex].activated;
      const situation1 =
        currentSquareIsActivated && (total === 2 || total === 3);
      const situation2 = !currentSquareIsActivated && total === 3;

      if (situation1) {
        newBoard[rowIndex][squareIndex].activated = true;
      } else if (situation2) {
        newBoard[rowIndex][squareIndex].activated = true;
      } else {
        currentSquareIsActivated
          ? (newBoard[rowIndex][squareIndex].activated = false)
          : console.log("inactive");
      }
    });
  });

  /*
        - situation 1 = activated && 2 or 3 total ? set to activate
        - situation 2 = nonActivated && 3total ? set to active
        - situation 3 - set to nonActivated

   */
  return newBoard;
};
