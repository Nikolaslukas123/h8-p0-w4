function tukarBesarKecil(kalimat) {
    
    var result="";
    for(var i=0;i<kalimat.length;i++){
        if(kalimat.charCodeAt(i)>64&&kalimat.charCodeAt(i)<91)result+=String.fromCharCode(kalimat.charCodeAt(i)+32);
        else if(kalimat.charCodeAt(i)>96&&kalimat.charCodeAt(i)<123)result+=String.fromCharCode(kalimat.charCodeAt(i)-32);
        else result+=kalimat[i];
    }
    return result;
  }
  
  console.log(tukarBesarKecil('Hello World')); 
  console.log(tukarBesarKecil('I aM aLAY')); 
  console.log(tukarBesarKecil('My Name is Bond!!')); 
  console.log(tukarBesarKecil('IT sHOULD bE me')); 
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); 