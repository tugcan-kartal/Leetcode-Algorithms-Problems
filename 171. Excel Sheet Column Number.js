function titleToNumber(columnTitle) {
  let columnNumber = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    columnNumber = columnNumber * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
   
  }

  return columnNumber;
}