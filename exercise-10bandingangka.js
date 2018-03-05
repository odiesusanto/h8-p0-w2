function bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true;
  } else if (angka2 === angka1) {
    return -1;
  } else {
    return false;
  }
}

bandingkanAngka(2,7);
bandingkanAngka(3,1);
bandingkanAngka(5,5);
bandingkanAngka(6,15);
bandingkanAngka(10,4);
bandingkanAngka(7,7);

console.log(bandingkanAngka(2,7));
console.log(bandingkanAngka(3,1));
console.log(bandingkanAngka(5,5));
console.log(bandingkanAngka(6,15));
console.log(bandingkanAngka(10,4));
console.log(bandingkanAngka(7,7));