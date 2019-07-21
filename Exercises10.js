function changeMe(arr) {
    var result=[];
    for(var i = 0;i<arr.length;i++){
        var tmp = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: (function(){
                if(arr[i].length===4){
                    return 2019 - arr[i][3];
                }else{
                    return "Invalid Birth Year";
                }
              }())
            
        }
        console.log(i+1+". "+tmp.firstName+" "+tmp.lastName+":");
        console.log(tmp);
    }
    return result;
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""