function generate(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const aboveLeft = triangle[i - 1][j - 1];
        const aboveRight = triangle[i - 1][j];
        row.push(aboveLeft + aboveRight);
      }
    }

    triangle.push(row);
  }

  return triangle;
}
