/*
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

const remove = (s) => {
  for(let i = s.length - 1; i > -1; i--) {
    if(s[i] !== '!') {
      break;
    }
    if(s[i] === '!') {
      s = s.slice(0, s.length - 1);
      break;
    }
  }
  return s;
}