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