export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//grid arrays/shapes
export const gridDefault = (): number[][] => {
  const rows = 18;
  const cols = 10;
  var array = [];

  // Fill array with 18 arrays each containing
  // 10 zeros (0)
  for (let row = 0; row < rows; row++) {
    array.push([] as number[]);
    for (let col = 0; col < cols; col++) {
      array[row].push(0);
    }
  }

  return array;
};

// Random Shape
export const randomShape = () => {
  return random(1, shapes.length - 1);
};

// Define block shapes and their rotations as arrays.
export const shapes: [number, number, number, number][][][] = [
  // none
  [
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // I
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  ],

  // T
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  
  // L
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  // J
  [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // Z
  [
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
    ],
  ],

  // S
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
    ],
  ],

  // O
  [
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
];

// Returns the next rotation for a shape
// rotation can't exceed the last index of the the rotations for the given shape.
export const nextRotation = (shape: number, rotation: number): number => {
  return (rotation + 1) % shapes[shape].length
}

export const canMoveTo = (shape: number, grid: number[][], x: number, y: number, rotation: number): boolean => {
  const currentShape = shapes[shape][rotation]
  // Loop through all rows and cols of the **shape**
  for (let row = 0; row < currentShape.length; row++) {
      for (let col = 0; col < currentShape[row].length; col++) {
          // Look for a 1 here
          if (currentShape[row][col] !== 0) {
              // x offset on grid
              const proposedX = col + x
              // y offset on grid
              const proposedY = row + y
              if (proposedY < 0) {
                  continue
              }
              // Get the row on the grid
              const possibleRow = grid[proposedY]
              // Check row exists
              if (possibleRow) {
                  // Check if this column in the row is undefined, if it's off the edges, 0, and empty
                  if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
                      // undefined or not 0 and it's occupied we can't move here.
                      return false
                  }
              } else {
                  return false
              }
          }
      }
  }
  return true
}

// Adds current shape to grid
export const addBlockToGrid = (shape: number, grid: number[][], x: number, y: number, rotation: number): number[][] => {
  // Get the block array
  const block = shapes[shape][rotation];
  // Copy the grid
  const newGrid = [...grid];            
  // Map the Block onto the grid                                                           
  for (let row = 0; row < block.length; row++) {
      for (let col = 0; col < block[row].length; col++) {
          if (block[row][col]) {
              newGrid[row + y][col + x] = shape;
          }
      }
  }
  return newGrid;
}

// Checks for completed rows and scores points
export const checkRows = (grid: number[][]) => {
  // Points increase for each row completed
  // i.e. 40 points for completing one row, 100 points for two rows
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    // No empty cells means it can't find a 0, so the row must be complete!
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      // Remove the row and add a new empty one at the top
      grid.splice(row, 1)
      // 10 is the number of columns in the row
      grid.unshift(Array(10).fill(0))
    }
  }
  return points[completedRows]
}
