function spongeMeme(sentence) {
  return sentence.split('').map((v,i)=>i%2!==0?v.toLowerCase():v.toUpperCase()).join('')
}