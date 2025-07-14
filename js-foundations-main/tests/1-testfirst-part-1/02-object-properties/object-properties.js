/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = function (x) {
    return ++x; //x++ will return x = 4, then increments
  };
}

function setPropsOnArr(arrayObject) {
  arrayObject.hello = function () {
    return "Hello!";
  };
  arrayObject.full = "stack"; //   let arrayObject;;
  arrayObject[0] = 5;
  arrayObject.twoTimes = function (para) {
    return para * 2;
  };
}

function setPropsOnFunc(functionObject) {
  functionObject.year = "20??";
  functionObject.divideByTwo = (x) => x / 2;
}

function shallowCopy(a, b) {
  let isObject = (obj) => {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
  };
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  } else if (isObject(a) && isObject(b)) {
    return { ...a, ...b };
  }
}
