function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

// time complexity would be O(n^2)

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}

// time complexity would be O(n^2)

function isPangram(str) {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        alphabet.splice(j, 1);
      }
    }
  }
  if (alphabet === []) {
    return true;
  } else {
    return false;
  }
}

//Time complaexity would be O(n^2)

function findLongestWord(str1, str2) {
  if (str1.length > str2.length) {
    return str1.length;
  } else {
    return str2.length;
  }
}

//time complexity would be O(1)
