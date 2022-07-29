// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// function reverse(str) {
//     let reversed = "";

//     for (let i of str) {
//       reversed = i + reversed;
//     }

//     return reversed;
//   }
