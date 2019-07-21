function checkAB(num) {
    var aIndex = num.search(/[a]/i);
    var bIndex = 0;
    
    for (var i = aIndex; i < num.length; i++) {
      if (num[i] === 'b') {
        bIndex = i - 2;
        break;
      } 
    }
    
    return aIndex <= bIndex ? true : false;
  }
  
  
 
  console.log(checkAB('lane borrowed')); 
  console.log(checkAB('i am sick')); 
  console.log(checkAB('you are boring')); 
  console.log(checkAB('barbarian')); 
  console.log(checkAB('bacon and meat')); 