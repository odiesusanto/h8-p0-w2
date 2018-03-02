1.
for(rows = 1; rows <= 5; rows ++){
  console.log('*');
}


2.
for(rows2 = 5; rows2 <= 5; rows2 ++){
  for(rows = 0; rows < 5; rows ++){
  console.log('*****');
  }
}


3.
for(rows3 = 5; rows3 <= 5; ++rows3){
  for(rows4 = 1; rows4 <= 1; ++rows4){
    console.log('*');
    for(rows5 = 1; rows5 <= 1; ++rows5){
      console.log('**');
      for(rows6 = 1; rows6 <= 1; ++rows6){
        console.log('***');
        for(rows7 = 1; rows7 <= 1; ++rows7){
          console.log('****');
          for(rows8 = 1; rows8 <= 1; ++rows8){
            console.log('*****');
          }
        }
      }
    }
  }
}