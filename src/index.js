module.exports = function check(str, bracketsConfig) {
/*function check(str, bracketsConfig) {*/
  let stack = [];
for (let i = 0; i < str.length; i++) {    
  if (isСouple(stack[stack.length-1],str[i],bracketsConfig)) {
    stack.pop(str[i]);
  } else {
    stack.push(str[i]);
  }
  }
  console.log(stack.length === 0);
return stack.length === 0;
}
const config3 = [['(', ')'], ['[', ']'], ['{', '}']]; 

/*check('([{}()])', config3);*/

function isСouple(open, close, bracketsConfig) {
for (let j = 0; j < bracketsConfig.length; j++) {
  if (bracketsConfig[j][0] === open) {
    if (bracketsConfig[j][1] === close) {
      return true;
    }
  }    
}
return false;
}