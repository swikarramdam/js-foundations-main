/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let collector = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      collector.push(key);
    }
  }
  return collector.join(", ");
}
