function renameFiles(nameLists) {
  let renamed = [];
  let n = 1;
  for (let name of nameLists) {
    if (renamed.includes(name)) {
      let temp = name;
      name = name + `(${n})`;
      if (renamed.includes(name)) {
        n++;
        name = temp + `(${n})`;
      }
      renamed.push(name);
      n++;
    } else {
      renamed.push(name);
    }
  }
  return renamed;
}
console.log(renameFiles(["hello", "world", "hello"]));
