/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.result = [];
}
RPNCalculator.prototype.push = function (number) {
  this.result.push(number);
};
RPNCalculator.prototype.plus = function () {
  if (this.result.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
  let popped1 = this.result.pop();
  let popped2 = this.result.pop();
  let sum = popped2 + popped1;
  this.result.push(sum);
};

RPNCalculator.prototype.minus = function () {
  if (this.result.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
  let popped1 = this.result.pop();
  let popped2 = this.result.pop();
  let sub = popped2 - popped1;
  this.result.push(sub);
};

RPNCalculator.prototype.times = function () {
  if (this.result.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
  let popped1 = this.result.pop();
  let popped2 = this.result.pop();
  let mul = popped2 * popped1;
  this.result.push(mul);
};
RPNCalculator.prototype.divide = function () {
  if (this.result.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
  let popped1 = this.result.pop();
  let popped2 = this.result.pop();
  let div = popped2 / popped1;
  this.result.push(div);
};

RPNCalculator.prototype.value = function () {
  if (this.result.length === 0) {
    throw "rpnCalculatorInstance is empty";
  }
  return this.result[this.result.length - 1];
};
