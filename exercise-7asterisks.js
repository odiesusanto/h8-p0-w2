1.
for(rows = 1; rows <= 5; rows ++){
  console.log('*');
}


2.
for(rows = 1; rows <= 5; rows ++){
  console.log('*');
}
for(rows2 = 0; rows2 < 5; rows2 ++){
  var asterisk = '';
  for(rows = 0; rows < 5; rows ++){
  asterisk += '*';
  }
  console.log(asterisk);
}


3.
for(rows3 = 0; rows3 < 5; rows3++){
  var asterisk = '';
  for(row = 0; row <= rows3; row++){
    asterisk += '*';
  }
  console.log(asterisk);
}