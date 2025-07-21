/* eslint-disable no-unused-vars */
function reject(arr, func) {
  return arr.filter((num) => !func(num));
}
