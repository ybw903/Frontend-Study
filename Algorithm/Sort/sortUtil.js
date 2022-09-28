// best case : o(n^2)
// worst case : o(n^2)
// stable sort
function bubbleSort(arr) {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 1; j < sortedArr.length - i; j++) {
      if (sortedArr[j - 1] > sortedArr[j])
        [sortedArr[j], sortedArr[j - 1]] = [sortedArr[j - 1], sortedArr[j]];
    }
  }
  return sortedArr;
}

// best case : o(n)
// worst case : o(n^2)
// stable sort
function insertionSort(arr) {
  const sortedArr = [...arr];
  for (let i = 1; i < sortedArr.length; i++) {
    const tmp = sortedArr[i];
    let j = i - 1;
    for (j; j >= 0 && sortedArr[j] > tmp; j--) {
      sortedArr[j + 1] = sortedArr[j];
    }
    sortedArr[j + 1] = tmp;
  }
  return sortedArr;
}

// best case : o(n^2)
// worst case : o(n^2)
// not stable sort
function selectionSort(arr) {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let min = sortedArr[i];
    let minIdx = i;
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < min) {
        min = sortedArr[j];
        minIdx = j;
      }
    }
    [sortedArr[i], sortedArr[minIdx]] = [sortedArr[minIdx], sortedArr[i]];
  }
  return sortedArr;
}

module.exports = { bubbleSort, insertionSort, selectionSort };
