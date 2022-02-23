let res = [];

const map = new Map();
map.set('1', []);
map.set('2', ['a', 'b', 'c']);
map.set('3', ['d', 'e', 'f']);
map.set('4', ['g', 'h', 'i']);
map.set('5', ['j', 'k', 'l']);
map.set('6', ['m', 'n', 'o']);
map.set('7', ['p', 'q', 'r', 's']);
map.set('8', ['t', 'u', 'v']);
map.set('9', ['w', 'x', 'y', 'z']);

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    res = [];
    if (digits.length > 0) {
      lc(digits, 0, "");
    }
    
    return res;
}

function lc(digits, i, str) {
  if (i > digits.length) return;
  if (i === digits.length) return res.push(str);

  const digit = digits[i];
  const choices = map.get(digit);

  for (let j = 0; j < choices.length; j++) {
    lc(digits, i + 1, str + choices[j]);
  }
}