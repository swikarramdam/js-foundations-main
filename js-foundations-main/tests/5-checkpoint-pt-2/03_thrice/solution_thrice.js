/* eslint-disable no-unused-vars */
function thrice(func) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return func();
    }
  };
}

let eight = thrice(sayEight);

function sayEight() {
  return "i am saying 8";
}
console.log(eight);
console.log(eight());
console.log(eight());

console.log(eight());
console.log(eight());
