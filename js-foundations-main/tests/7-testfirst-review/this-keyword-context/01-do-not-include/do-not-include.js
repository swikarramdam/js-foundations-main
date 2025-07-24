Array.prototype.doNotInclude = function (arr) {
  const indicesToExclude = Array.isArray(arr) ? arr : [arr];
  return this.filter((_, index) => !indicesToExclude.includes(index));
  //filter keeps all the elements whose indices are not in the indicestoExclude
  // (underscore) means we don’t care about the element value here — you only need the index.
};
