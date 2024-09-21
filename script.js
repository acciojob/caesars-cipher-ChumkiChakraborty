// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ","
};

function rot13(encodedStr) {
  let decodedArr = []; // Your result goes here

  // Loop through each character of the input string
  for (let i = 0; i < encodedStr.length; i++) {
    let currentChar = encodedStr[i];

    // If the character exists in the lookup table, decode it
    if (lookup[currentChar]) {
      decodedArr.push(lookup[currentChar]);
    } else {
      // If it doesn't exist in lookup (e.g., space or punctuation), keep it as is
      decodedArr.push(currentChar);
    }
  }

  // Join the array into a single string and return it
  return decodedArr.join('');
}

// You can test your code by running the above function and printing it to the console
console.log(rot13("SERR YBIR? NPPVBWBO")); // Outputs: "FREE LOVE? ACCIOSUBO"

// Do not change this line
window.rot13 = rot13;
