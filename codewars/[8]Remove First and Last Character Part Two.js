function array(arr){
  const characters = arr.split(',')
  characters.shift()
  characters.pop()
  return characters.length ? characters.join(' ') : null
 }
 