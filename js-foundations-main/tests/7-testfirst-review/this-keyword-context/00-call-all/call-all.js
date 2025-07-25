function callAll(obj, arr) {
  let results = [];
  for (let func of arr) {
    let returnedVal = func.call(obj);
    results.push(returnedVal);
  }
  return results;
}
//understood problem but not the purpose of it
