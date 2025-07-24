function pigify(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];

  return sentence
    .split(" ")
    .map((word) => {
      word = word.toLowerCase();

      // If first letter is a vowel
      if (vowels.includes(word[0])) {
        return word + "ay";
      }

      // Loop to find the first real vowel
      for (let i = 1; i < word.length; i++) {
        const letter = word[i];
        const prev = word[i - 1];

        // If it's a vowel
        if (vowels.includes(letter)) {
          // Special handling for 'qu' as a single unit
          if (letter === "u" && prev === "q") {
            continue; // skip 'u' in 'qu'
          }

          // Found real vowel, slice & build result
          const start = word.slice(0, i);
          const rest = word.slice(i);
          return rest + start + "ay";
        }
      }

      // If no vowel is found (unlikely), just return word + 'ay'
      return word + "ay";
    })
    .join(" ");
}

// function pigify(sentence) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const words = sentence.toLowerCase().split(' ');
//   const result = [];

//   for (let word of words) {
//     // Case 1: Starts with a vowel
//     if (vowels.includes(word[0])) {
//       result.push(word + 'ay');
//       continue;
//     }

//     // Case 2: Starts with consonant(s)
//     let firstVowelIndex = -1;

//     for (let i = 1; i < word.length; i++) {
//       const letter = word[i];
//       const prev = word[i - 1];

//       if (vowels.includes(letter)) {
//         if (letter === 'u' && prev === 'q') {
//           // skip 'u' in 'qu'
//           continue;
//         }

//         firstVowelIndex = i;
//         break;
//       }
//     }

//     if (firstVowelIndex !== -1) {
//       let consonantCluster = word.slice(0, firstVowelIndex);
//       let rest = word.slice(firstVowelIndex);
//       let pigWord = rest + consonantCluster + 'ay';
//       result.push(pigWord);
//     } else {
//       // No vowel found at all (edge case), just add 'ay'
//       result.push(word + 'ay');
//     }
//   }

//   return result.join(' ');
// }
