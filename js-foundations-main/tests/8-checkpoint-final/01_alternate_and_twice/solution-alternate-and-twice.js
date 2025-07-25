function alternate(callback) {
  let count = 0;
  return function () {
    count++;
    if (count % 2 !== 0) {
      //odd then add hey to the previous message
      return callback();
    } //if even simply return message
  };
}

function twice(func_arg) {
  let count = 0;
  return function () {
    if (count < 2) {
      count++;
      return func_arg();
    } else return 0;
  };
}
