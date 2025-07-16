/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function doubler(input) {
  return input * 2;
}

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    res = callback(arr[i]);
    result.push(res);
  }
  return result;
}

function filter(arr, predicateFn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function includes(collection, value) {
  if (typeof collection === "object" && !Array.isArray(collection)) {
    for (let key in collection) {
      if (collection[key]) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
  }
  return false;
}

function countWords(total, sentence) {
  sentence = sentence.split(" ");
  total += sentence.length;
  return total;
}

function reduce(arr, startValue, fn) {
  let result = startValue;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]); //callback function of reduce has its own two args they are: accumulator and startValue
  }
  return result;
}

function sum(arr) {
  return reduce(arr, 0, (a, b) => a + b); //how does it know what's a and what's b, that'll be defined in the function like ?? shouldn't it be arr[i] and arr[i+1], I know in built map function will know but how will my function know what's a and what's b?Look at your defined function idiot.
}

function every(arr, isEven) {
  return reduce(arr, true, (a, b) => a && isEven(b)); //what other than empty array
}

function some(arr, isEven) {
  return reduce(arr, false, (a, b) => a || isEven(b));
}
