/* eslint-disable no-unused-vars */
function repeat(str, times) {
  let result = "";
  if (times === 0) return result;
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function sum(sortedArr) {
  let result = 0;
  if (sortedArr.length === 0) {
    return result;
  }
  for (let i = 0; i < sortedArr.length; i++) {
    result += sortedArr[i];
  }
  return result;
}
function join(sortedArr, delimeter = "") {
  let result = "";
  if (sortedArr.length === 0) {
    return result;
  }
  for (let i = 0; i < sortedArr.length; i++) {
    result += sortedArr[i] + delimeter;
  }
  if (delimeter !== "") {
    return result.slice(0, -1);
  } else return result;
}

function gridGenerator(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) result += "#";
      else result += " ";
    }
    result += "\n";
  }

  return result;
}

function paramify(obj) {
  let result = "";
  let collector = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //checks if the obj object has its own property not inherited
      collector.push(key);
    }
  }
  collector.sort();
  for (let i = 0; i < collector.length; i++) {
    let keys = collector[i];
    let value = obj[keys];
    result += collector[i] + "=" + value;
    result += "&";
  }
  return result.slice(0, -1);
}

function paramifyObjectKeys(obj) {
  let result = "";
  let collector = [];
  let keys = Object.keys(obj); //Object.keys return sortedArray of only own properties so no need to use hasOwnPropertyCheck
  for (let i = 0; i < keys.length; i++) {
    collector.push(keys[i]);
  }
  collector.sort();
  for (let i = 0; i < collector.length; i++) {
    let keys = collector[i];
    let value = obj[keys];
    result += collector[i] + "=" + value;
    result += "&";
  }
  return result.slice(0, -1);
}

// function sort(arr) {
//   let sortedArr = arr.slice();
//   let swapped = true;
//   while (swapped) {
//     swapped = false;

//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       if (
//         typeof sortedArr[i] === "string" &&
//         typeof sortedArr[i + 1] === "string"
//       ) {
//         if (sortedArr[i].length > sortedArr[i + 1].length) {
//           let temp = sortedArr[i]; //otherwise the sortedArr[i] value gets overwritten
//           sortedArr[i] = sortedArr[i + 1];
//           sortedArr[i + 1] = temp; //to prevent overwriting of the upcoming element
//           swapped = true;
//         }
//       } else if (typeof sortedArr[i] === "number") {
//         if (sortedArr[i] > sortedArr[i + 1]) {
//           let temp = sortedArr[i];
//           sortedArr[i] = sortedArr[i + 1];
//           sortedArr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     }
//   }

//   return sortedArr;
// }
function sort(arr) {
  let sortedArr = arr.slice(); // Copy original array
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < sortedArr.length - 1; i++) {
      // Both strings: compare alphabetically
      if (
        typeof sortedArr[i] === "string" &&
        typeof sortedArr[i + 1] === "string"
      ) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          let temp = sortedArr[i];
          sortedArr[i] = sortedArr[i + 1];
          sortedArr[i + 1] = temp;
          swapped = true;
        }
      }

      // Both numbers: compare numerically
      else if (
        typeof sortedArr[i] === "number" &&
        typeof sortedArr[i + 1] === "number"
      ) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          let temp = sortedArr[i];
          sortedArr[i] = sortedArr[i + 1];
          sortedArr[i + 1] = temp;
          swapped = true;
        }
      }
    }
  }

  return sortedArr;
}
