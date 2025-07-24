Array.prototype.maap = function (callback) {
  const result = [];
  this.forEach((currElement, Idx, arr) => {
    const mapped = callback(currElement, Idx, arr);
    result.push(mapped);
  });
  return result;
};

Array.prototype.fiilter = function (callback) {
  const result = [];
  this.forEach((currElement, index, arr) => {
    if (callback(currElement, index, arr)) {
      result.push(currElement);
    }
  });
  return result;
};

Array.prototype.reeduce = function (callback, initialValue) {
  let accumulator = initialValue; //by default
  let started = initialValue !== undefined; //true if initial value given
  this.forEach((currElement, index, arr) => {
    if (!started) {
      accumulator = currElement; //if started if false, that means initial value is not given
      started = true;
    } else {
      accumulator = callback(accumulator, currElement, index, arr);
    }
  });
  return accumulator;
};
