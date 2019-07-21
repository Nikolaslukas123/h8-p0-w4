function ubahHuruf(kata) {
    
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var res = '';
    
    for (var i = 0; i < kata.length; i++) {
      for (var j = 0; j < abjad.length; j++) {
        if (kata[i] === abjad[j]) {
          res += abjad[j+1]
        }
      }
    }
    
    return res;
  }

  console.log(ubahHuruf('wow')); 
  console.log(ubahHuruf('developer'));  
  console.log(ubahHuruf('javascript')); 
  console.log(ubahHuruf('keren')); 
  console.log(ubahHuruf('semangat')); 