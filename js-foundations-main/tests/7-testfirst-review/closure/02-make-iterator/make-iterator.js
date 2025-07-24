function makeIterator(arr) {
  let curIdx = 0;
  return {
    getNext() {
      if (curIdx >= arr.length) {
        //there will not be value after the array's length
        return {
          value: undefined, //so return undefined
          done: true,
        };
      } else {
        //idx is less than array's length
        let val = arr[curIdx]; //means value exists at given idx
        curIdx++; // so find next idx
        return {
          value: val, //value has a value now
          done: false,
        };
      }
    },
    getIndex() {
      return curIdx;
    },
  };
}
