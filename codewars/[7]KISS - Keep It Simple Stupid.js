function isKiss( words ){
  const l=words.split(' ');
   return l.every(v=>v.length<=l.length)?"Good work Joe!":"Keep It Simple Stupid"
 }