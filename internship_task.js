const isValid = (s) => {
  let stack = [];
  let dict = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop();
      if (dict[top] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
let s = "()";
console.log(isValid(s)); // true
s = "({)}";
console.log(isValid(s)); // false
s = "(){[]}";
console.log(isValid(s)); // true
