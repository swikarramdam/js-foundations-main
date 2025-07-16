function concatString() {
  let args = Array.from(arguments);
  return args.join("");
}

function yourFunctionRunner() {
  let result = "";
  let args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    result += args[i]();
  }
  return result;
}

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

function once(anotherFunc) {
  let called = false; //this called is for anotherfunc, if that has been called or not
  let result; //this is also for our anotherFunc's result
  return function () {
    if (!called) {
      result = anotherFunc();
      called = true;
      return result;
    } else return "the function has already been called...";
  };
}

function anotherFunc() {
  return "this is result from anotherFunc";
}
// once(anotherFunc);
// let print = once(anotherFunc);
// console.log(print());

function createObjectWithClosures() {
  let value = 0;
  const obj = {};
  obj.oneIncrementer = function () {
    value += 1;
  };
  obj.tensIncrementer = function () {
    value += 10;
  };
  obj.getValue = function () {
    return value;
  };
  obj.setValue = function (newValue) {
    value = newValue;
  };
  return obj;
}

function dontSpillTheBeans(arg) {
  let secret = arg;
  const obj = {};
  obj.getSecret = function () {
    return secret;
  };

  obj.setSecret = function (newSecret) {
    secret = newSecret;
  };
  return obj;
}
