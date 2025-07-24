function vowelsCount(str) {
  str = str.toLowerCase();
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  return Array.from(str).reduce(
    (acc, char) => {
      if (vowels.has(char)) {
        acc[char]++;
        acc.total++;
      }
      return acc;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 }
  );
}
