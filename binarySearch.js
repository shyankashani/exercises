const binarySearch = (arr, tar) => {
  const recurse = (min, mid, max) => {
    if (tar === arr[min]) { return min; }
    if (tar === arr[mid]) { return mid; }
    if (tar === arr[max]) { return max; }
    if (min === max) { return undefined; }
    if (tar < arr[mid]) { return recurse(min, Math.floor((min + mid) / 2), mid); }
    if (tar > arr[mid]) { return recurse(mid, Math.floor((max + mid) / 2), max); }
  }
  return recurse(0, Math.floor(array.length) - 1, array.length - 1);
}
