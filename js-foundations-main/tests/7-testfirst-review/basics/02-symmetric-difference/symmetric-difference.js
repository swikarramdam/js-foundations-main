function difference(arrayA, arrayB) {
  return arrayA.filter((element) => !arrayB.includes(element));
}

function symmetricDiff(arrayA, arrayB) {
  let diffA = difference(arrayA, arrayB);
  let diffB = difference(arrayB, arrayA);
  return [...diffA, ...diffB];
}
