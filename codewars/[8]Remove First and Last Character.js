function removeChar(str){
  if (str.lenght <= 2) {
    return str;
  } else {
    str = str.substring(1, str.length-1);
    return str;
  }

 };