function litres(time) {
  let newTime = Math.floor(time);
  if (newTime <= 1) {
    return 0;
  } else {
    return Math.floor(newTime / 2);
  }
}