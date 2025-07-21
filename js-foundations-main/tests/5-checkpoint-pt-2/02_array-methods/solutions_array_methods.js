/* eslint-disable no-unused-vars */
function useMapToUpperCase(string) {
  string = string.split(" ");
  return (mapped = string.map((element) => element.toUpperCase()));
}

function useFilter(arr) {
  return arr.filter((element) => {
    return element.includes("@");
  });
}

function sumWithReduce(arr, startValue = 0) {
  let sum = arr.reduce(
    (accumulator, element) => accumulator + element,
    startValue
  );
  return sum;
}

function filterEvensDoubleAndSum(arr) {
  let evenOnly = arr.filter((element) => element % 2 === 0);
  let doubles = evenOnly.map((element) => element * 2);
  let sum = doubles.reduce((accumulator, element) => {
    return (accumulator += element);
  }, 0);
  return sum;
}
