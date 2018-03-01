var nama = '';
var peran = '';


if(nama === 'Odie' && peran === ''){
    console.log("Pilih Peranmu untuk memulai game");
}
else if(peran === 'Ksatria'){
    console.log("Selamat datang di Proxytia!");
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang lawanmu.`);
}
else if(peran == 'Tabib'){
    console.log("Selamat datang di Proxytia!");
    console.log(`Halo Tabib ${nama}, kamu dapat menymbuhan yang terluka.`);
}
else if(peran == 'Penyihir'){
    console.log("Selamat datang di Proxytia!");
    console.log(`Halo Penyihir ${nama}, keajaibanmu akan membantu untuk melawan musuhmu.`);
}
else{
  console.log("Pilih nama dan peran untuk memulai game");
}


