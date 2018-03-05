function xo(str) {
  var x = 0;
  var o = 0;
  for(i = 0; i < str.length; i++) {
    if (str[i] === 'x' ) {
    x++;
  } else {
    o++;
  }
  }
  return x === o;
}

console.log(xo('xoxoxo'));
console.log(xo('xxoooxx'));
console.log(xo('xoxx'));
console.log(xo('xxooxxoo'));
console.log(xo('xo'));
console.log(xo('xoxoxox'));