var FilterString = function(value) {
  let newString = value.replace(/[a-zа-яё]/gi, '');
  newString = Number(newString);
  return newString;
}