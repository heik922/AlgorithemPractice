// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const mapA = buildMap(stringA);
  const mapB = buildMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let char in mapA) {
    if (mapA[char] != mapB[char]) {
      return false;
    }
  }

  return true;
}

function buildMap(string) {
  const charMap = {};
  for (let char of string.replace(/[^\w']/g, "").toLowerCase()) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  return charMap;
}
