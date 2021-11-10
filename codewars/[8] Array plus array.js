function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2); //something went wrong
   let maxSum = 0; // если элементов не будет - возвращаем 0

    for (let j = 0; j < arr.length; j++) {
      maxSum += arr[j];
      maxSum = Math.max(maxSum);
    }

  return maxSum;
}