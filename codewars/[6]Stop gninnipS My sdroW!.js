function spinWords(string){
  return string.split(' ').map(value=>{ if (value.length>4) return value.split('').reverse().join(''); 
 return value})
                     .join(' ');
}