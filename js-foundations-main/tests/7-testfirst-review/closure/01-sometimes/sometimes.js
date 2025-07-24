function sometimes(add) {
  let count = 0;
  return function (...args) {
    count++;
    if (count <= 3) return add(...args);
    else if (count % 2 === 0) return "I do not know!";
    else return add(...args);
  };
}
