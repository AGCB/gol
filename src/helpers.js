export const createDefaultBoard = (size = 10) => {
  let board = [];
  let iterator = Array.from(Array(size).keys());
  iterator.forEach((x) => {
    let row = [];
    iterator.forEach((y) => {
      row.push({ x: x, y: y, activated: Math.random() > 0.97 });
    });
    board.push(row);
  });

  return board;
};

export default createDefaultBoard;
