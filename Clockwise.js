// input n
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
rl.question("Enter n: \n", function (size) {
  n = size;
  rl.close();

  // output n*n matrix
  let matrix = make2DArray(n, n)
  setEdge(matrix, 0, 0, 1, n)

  console.log(matrix);
});

// function region
function make2DArray(m, n) {
  let array = []
  for(let i = 0; i < n; i++)
      array.push(new Array(m))
  return array
}

function setEdge(matrix, x, y, number, n) {
  if (n < 0) { return; }
  else if (n == 1) {
    matrix[x][y] = number;
    return;
  }
  else {
    // up >> right >> bottom >> left
    for (i = x; i < x + n-1; i++)
      matrix[y][i] = number++;
    for (j = y; j < y + n-1; j++)
      matrix[j][x+n-1] = number++;
    for (i = x+n-1; i > x; i--)
      matrix[y+n-1][i] = number++;
    for (j = y+n-1; j > y; j--)
      matrix[j][x] = number++;

    setEdge(matrix, x+1, y+1, number, n-2);
  }
}

