/* eslint-disable no-unused-vars */
function presses(str) {
  debugger;
  str = str.toLowerCase();
  let first = " adgjkmptw1234567890";
  let second = "behknqux";
  let third = "cfilorvy";
  let fourth = "sz";
  let times = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if (str[i] === " ") times += 1;
    if (first.includes(str[i])) times += 1;
    else if (second.includes(str[i])) times += 2;
    else if (third.includes(str[i])) times += 3;
    else if (fourth.includes(str[i])) times += 4;
  }
  return times;
}

presses("I am traveling to Chicago and staying on 1st street");
