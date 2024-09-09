function sortArray(arr) {
  let l = 0;
  let m = 0;
  let h = arr.length - 1;

  while (m <= h) {
    if (arr[m] === 0) {
      [arr[l], arr[m]] = [arr[m], arr[l]];
      l++;
      m++;
    } else if (arr[m] === 1) {
      m++;
    } else if (arr[m] === 2) {
      [arr[m], arr[h]] = [arr[h], arr[m]];
      h--;
    }
  }
  return arr;
}

console.log(sortArray([0, 1, 2, 1, 0, 2, 1, 0]));
console.log(sortArray([2, 2, 2, 2]));
console.log(sortArray([0, 0, 0, 0]));
console.log(sortArray([1, 1, 1, 1]));
console.log(sortArray([2, 0, 1]));
console.log(sortArray([]));
