/* eslint-disable no-unused-vars */
function multiplicationTable(rows, columns) {
  let result = [];
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      let multiple = i * j;
      row.push(multiple);
    }
    result.push(row);
  }
  return result;
}
console.log(multiplicationTable(3, 4));
