import { useEffect, useRef } from "react";

export const createBoard = (size = 10) => {
  let board = [];
  let iterator = Array.from(Array(size).keys());
  iterator.forEach((x) => {
    let row = [];
    iterator.forEach((y) => {
      row.push({
        x: x,
        y: y,
        activated: false,
      });
    });
    board.push(row);
  });

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
  /*
    define mooreNeighborOffsets MNO
    for each square, create a total
      - traverse through initialBoard MNO squares (if valid)
        - increment total
        - situation 1 = activated && 2 or 3 total ? set to activate
        - situation 2 = nonActivated && 3total ? set to active
        - situation 3 - set to nonActivated

   */
  return initialBoard;
};
