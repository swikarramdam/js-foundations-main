function mapQuest(arr) {
  let obj = {
    N: "S",
    E: "W",
    S: "N",
    W: "E",
  };
  let reduced = arr.reduce((acc, item) => {
    if (acc[acc.length - 1] === obj[item]) {
      acc.pop();
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  return reduced;
}
