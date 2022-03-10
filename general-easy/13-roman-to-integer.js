/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  if (s.length === 0) return 0;
  
  let result = 0;
  for (let i = 0; i < s.length;) {
      if (i < s.length - 1 && dic.has(s.substring(i, i + 2))) {
          result += dic.get(s.substring(i, i + 2));
          i += 2;
      } else {
          result += dic.get(s.charAt(i));
          i++;
      }
  }
  
  return result;
};

const dic = new Map;
dic.set('I', 1);
dic.set('V', 5);
dic.set('X', 10);
dic.set('L', 50);
dic.set('C', 100);
dic.set('D', 500);
dic.set('M', 1000);
dic.set('IV', 4);
dic.set('IX', 9);
dic.set('XL', 40);
dic.set('XC', 90);
dic.set('CD', 400);
dic.set('CM', 900);