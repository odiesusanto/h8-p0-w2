function balikKata(kata){
  var word = '';
  for(i = kata.length - 1 ; i >= 0; i--){
    word = word + kata[i];
  }
  return word;
}
balikKata('hello');
balikKata('How are you?');
balikKata('I am fine!');

console.log(balikKata('hello'));
console.log(balikKata('How are you?'));
console.log(balikKata('I am fine!'));
