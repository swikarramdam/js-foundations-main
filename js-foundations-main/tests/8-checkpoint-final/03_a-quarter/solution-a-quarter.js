function aQuarter(func) {
  let count = 0;
  return function (...args) {
    if (count < 3) {
      count++;
      return "something went wrong :/";
    } else {
      count = 0;
      let result = func(...args);
      return result;
    }
  };
}
