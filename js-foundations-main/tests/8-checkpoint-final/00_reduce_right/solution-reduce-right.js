function reduceRight(arr, startingPoint = 0, iterateFun) {
  let accumulator = startingPoint;
  for (let i = arr.length - 1; i >= 0; i--) {
    accumulator = iterateFun(accumulator, arr[i]);
  }
  return accumulator;
}
