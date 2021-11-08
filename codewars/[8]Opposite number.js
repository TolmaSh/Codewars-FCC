function opposite(number) {
  let newNum = number;
if (number > 0) {
  newNum = '-' + number;
  newNum = Number(newNum);
  return newNum;
} else {
  newNum = String(number);
  newNum = newNum.slice(1);
  newNum = Number(newNum);
  return newNum
}
}