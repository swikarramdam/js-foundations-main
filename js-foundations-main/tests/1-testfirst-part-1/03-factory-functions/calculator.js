/* eslint-disable no-unused-vars */
function createCalculator() {
  const calculator = {
    currentTotal: 0,
    value() {
      return this.currentTotal;
    },
    add(num) {
      return (this.currentTotal += num);
    },
    subtract(num) {
      return (this.currentTotal -= num);
    },
    clear() {
      this.currentTotal = 0;
    },
  };
  return calculator;
}

let protoCalculator = {
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  let newObj = Object.create(protoCalculator);
  newObj.total = -10;
  return newObj;
}

function addSquareMethod(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].square = function () {
      const value = this.value(); // get current total using instance's value method
      return value * value; // return square
    };
  }
  return arr; // return the updated array
}

// function addSquareMethod(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].square = function () {
//       let value = this.value();
//     };
//     return a * a;
//   }
// }
