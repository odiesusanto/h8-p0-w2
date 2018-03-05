function konversiMenit(menit) {
  var minute = Math.floor(menit / 60);
  var sec = menit % 60;
  var countsec = '';
  if(sec < 10){
    countsec = '0' + sec;
  } else {
    countsec = sec;
  }
  return(minute  + ':' + countsec);
}

konversiMenit(75);
konversiMenit(160);
konversiMenit(65);

console.log(konversiMenit(75));
console.log(konversiMenit(160));
console.log(konversiMenit(65));
