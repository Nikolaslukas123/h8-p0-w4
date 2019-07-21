function urutkanAbjad(str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var urutan ='';

    for(i=0; i < abjad.length; i++) {
        for(j=0; j<str.length; j++) {
            if(abjad[i]=== str[j]) {
                urutan +=abjad[i];
            }
        }
    } return urutan;

}
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'