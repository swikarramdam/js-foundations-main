// function soup(phrase, bank) {
//   const phraseMap = {};
//   const bankMap = {};
//   phrase = phrase.toLowerCase();
//   bank = bank.toLowerCase();

//   for (let i = 0; i < phrase.length; i++) {
//     if (phraseMap.hasOwnProperty(phrase[i])) {
//       phraseMap[phrase[i]] += 1;
//     } else {
//       phraseMap[phrase[i]] = 1;
//     }
//   }

//   for (let i = 0; i < bank.length; i++) {
//     if (bankMap.hasOwnProperty(bank[i])) {
//       bankMap[bank[i]] += 1;
//     } else {
//       bankMap[bank[i]] = 1;
//     }
//   }

//   for (let key in phraseMap) {
//     if (!bankMap.hasOwnProperty(key)) {
//       return false;
//     }
//     if (bankMap[key] < phraseMap[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function soup(phrase, bank) {
//   const count = {};
//   bank = bank.toLowerCase();

//   for (let i = 0; i < bank.length; i++) {
//     const char = bank[i];
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }

//   phrase = phrase.toLowerCase();

//   for (let i = 0; i < phrase.length; i++) {
//     const char = phrase[i];
//     if (!count[char]) {
//       return false;
//     }
//     count[char]--;
//   }

//   return true;
// }
function soup(phrase, bank) {
  const count = {};
  bank = bank.toLowerCase();

  for (let i = 0; i < bank.length; i++) {
    let char = bank[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  phrase = phrase.toLowerCase();
  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}
