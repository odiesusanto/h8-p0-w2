1.
var number = 1;

console.log('LOOPING PERTAMA');

while (number <= 20) {
  number ++ ;
  console.log(number ++ + ' - I love coding');
}

var number = 21;

console.log('LOOPING KEDUA');

while (number >= 2) {
  number --;
  console.log(number -- + ' - I will become fullstack developer');
}


2.
console.log('LOOPING PERTAMA');

for(number = 1; number < 21; number ++){
  console.log(number + ' - I love coding');
}

console.log('LOOPING KEDUA');

for(number = 20; number > 0; number --){
  console.log(number + ' - I will become fullstack developer');
}


3.
(1)
for(number = 1; number <= 100; number ++) {
    console.log(number);
}

(2)
for(number = 1; number <= 100; number ++){
    if(number%2 === 0) {
    console.log("GENAP");
    }
    else if(number%2 == 1) {
      console.log("GANJIL");
    }
  }
  
 (3 & 4)
 for(number = 1; number <= 100; number +=2) {
    if(number%3 !== 0){
      console.log(number);
    }
    if(number%3 === 0){
      console.log('3 kelipatan 3');
    }
  }
  
  for(number = 1; number <= 100; number +=5) {
    if(number%6 !== 0){
      console.log(number);
    }
    if(number%6 === 0){
      console.log('6 kelipatan 6')
    }
  } 
  
  for(number = 1; number <= 100; number +=9) {
    if(number%10 !== 0){
      console.log(number);
      }
    if (number%10 === 0){
      console.log('10 kelipatan 10');
    }
  }