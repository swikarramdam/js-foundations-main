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

function soup(phrase, bank) {
  if (typeof phrase !== "string" || typeof bank !== "string") return false;

  phrase = phrase.replace(/[^a-z]/gi, "").toLowerCase();
  bank = bank.replace(/[^a-z]/gi, "").toLowerCase();

  const phraseMap = {};
  const bankMap = {};

  for (let char of phrase) {
    phraseMap[char] = (phraseMap[char] || 0) + 1;
  }

  for (let char of bank) {
    bankMap[char] = (bankMap[char] || 0) + 1;
  }

  for (let key in phraseMap) {
    if (!bankMap[key] || bankMap[key] < phraseMap[key]) {
      return false;
    }
  }

  return true;
}
