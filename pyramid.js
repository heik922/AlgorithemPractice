// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = "") {
  if (row === n) return;

  if (str.length === 2 * n - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  if (midpoint - row <= str.length && midpoint + row >= str.length) {
    str += "#";
  } else {
    str += " ";
  }

  return pyramid(n, row, str);
}

// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);

//   for (let i = 0; i < n; i++) {
//     let level = "";

//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (mid - i <= j && mid + i >= j) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
