function interleave(...arguments) {
  let result = "";
  let maxLength = Math.max(...arguments.map((str) => str.length));

  for (let i = 0; i < maxLength; i++) {
    //every ith value is max word length which is equal to the longest string among the arguments
    for (let j = 0; j < arguments.length; j++) {
      //every jth value is a new string.
      if (arguments[j][i] !== undefined) {
        result += arguments[j][i];
      }
    }
  }
  return result;
}
