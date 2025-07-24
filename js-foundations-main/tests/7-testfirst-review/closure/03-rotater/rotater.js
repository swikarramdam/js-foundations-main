// function rotater(str) {
//   let count = 0;
//   let isLeft = true;
//   return function (num) {
//     for (let i = 0; i < num; i++) {
//       if (isLeft) {
//         let temp = str; //temp = abcde temp = bcdea
//         str = str.slice(1) + temp[0]; //bcdea //cdeab
//       }
//       if (!isLeft) {
//         let temp = str; //temp = helloword //temp2 = dhelloworl
//         str = temp[str.length - 1] + str.slice(0, str.length - 1); //bcdea //cdeab
//       }
//       count++;
//       if (count === str.length) {
//         isLeft = !isLeft; //making it false will require me to make it true again after rotation, this will fix the issue as true becomes false and vice versa
//         count = 0;
//       }
//     }
//     return str;
//   };
// }

function rotater(str) {
  let direction = 1;
  return function (rotations) {
    debugger;
    if (rotations === str.length && str.length !== 0) {
      direction *= -1;
    }

    let effectiveRotation = rotations % str.length;
    if (effectiveRotation < 0) {
      effectiveRotation += str.length; // add str.length to make it positive
    }
    let result;
    if (direction === 1) {
      result = str.slice(effectiveRotation) + str.slice(0, effectiveRotation); //left rotation
    } else {
      result = str.slice(-effectiveRotation) + str.slice(0, -effectiveRotation); //right rotation
    }
    return result;
  };
}

const rota = rotater("abc");
rota(6);
