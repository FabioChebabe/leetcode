function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
): number {
  const grid = Array.from({ length: m }, () => Array(n).fill(0));
  for (const [i, j] of guards) grid[i][j] = 1;
  for (const [i, j] of walls) grid[i][j] = 2;

  for (let i = 0; i < m; i++) {
    let seen = false;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        seen = true;
      } else if (grid[i][j] === 2) {
        seen = false;
      } else if (seen) {
        grid[i][j] = 3;
      }
    }
    seen = false;
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 1) {
        seen = true;
      } else if (grid[i][j] === 2) {
        seen = false;
      } else if (seen) {
        grid[i][j] = 3;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    let seen = false;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) {
        seen = true;
      } else if (grid[i][j] === 2) {
        seen = false;
      } else if (seen) {
        grid[i][j] = 3;
      }
    }
    seen = false;
    for (let i = m - 1; i >= 0; i--) {
      if (grid[i][j] === 1) {
        seen = true;
      } else if (grid[i][j] === 2) {
        seen = false;
      } else if (seen) {
        grid[i][j] = 3;
      }
    }
  }

  let count = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) count++;
    }
  }

  return count;
}

countUnguarded(
  4,
  6,
  [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  [
    [0, 1],
    [2, 2],
    [1, 4],
  ]
);
