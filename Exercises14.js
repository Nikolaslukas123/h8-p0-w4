function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result=[];
    if(arrPenumpang.length!==0){
        for(var i=0;i<arrPenumpang.length;i++){

            var tmp = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: (function(){
                    var naik=false;
                    var distance =0;
                    for(var j=0;j<rute.length;j++){
                        if(naik===true)distance++;
                        if(rute[j]===arrPenumpang[i][1])naik=true;
                        if(rute[j]===arrPenumpang[i][2]){
                            return distance*2000;
                            break;
                        }
                        
                    }
                }())
            }
            result.push(tmp);
        }
    }
    return result;
    //your code here
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[] 
