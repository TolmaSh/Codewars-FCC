function makeNegative(num) {
  if (num <= 0 ) {
    return num;
  } else {
    num = '-' + num;
    num = Number(num);
    return num;
  }
}