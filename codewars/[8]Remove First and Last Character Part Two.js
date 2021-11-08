function array(arr){
  if ( arr.length > 3) {
     arr = arr.replace(/[^0-9]/g, '');
     arr = arr.split("");
     arr = String(arr);
     arr = arr.substring(2, arr.length-2);
     arr = arr.replace(/[^0-9]/g, ' ');
 
    return arr
  } else {
    return null
  }
 
 }
 