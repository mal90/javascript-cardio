function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const left = [];
  const right = [];
  rest.forEach(element => {
    if (pivot <= element) {
      right.push(element);
    } else {
      left.push(element);
    }
  });
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([2, 4, 1, 3, 9, 4, 5, 6, 0, 2]));

/**
 * pivot is the 0th element of the array
 * add rest of the elements on to another array named rest
 *
 * left array is the elements less or equal than pivot and right is the opposite
 *
 * for example first round
 *
 * pivot = 2
 * left = 1, 0
 * right = 4, 3, 9, 4, 5, 6, 2
 *
 * then do this recursively and concat the pivot in the middle and concat right after that
 */