function keyAdder() {
  let total = 0;
  for (let keys in this) {
    //this should be used instead of hardcoded obj
    if (this.hasOwnProperty(keys) && typeof this[keys] === "number") {
      total += this[keys];
    }
  }
  return total;
}
