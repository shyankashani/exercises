var merge = (leftArray, rightArray) => {
  var mergedArray = [];
  var leftIndex = 0;
  var rightIndex = 0;

  for (var i = 0; i < leftArray.length + rightArray.length; i++) {
    if (leftArray[leftIndex] <= rightArray[rightIndex] || rightIndex === rightArray.length) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArray;
};

var mergeSort = array => {
  // separate array into an array of sorted sub arrays
  var sortedSubArrays = [];

  // keep track of current sub array
  var currentSubArray = [];

  // iterate through the items in the array
  for (var i = 0; i < array.length; i++) {
    // if the current sub array is empty
    // or if the item in the array is greater than or equal to the last item in the current sub array
    if (!currentSubArray.length || currentSubArray[currentSubArray.length - 1] <= array[i])
      // push the item into the current sub array
      currentSubArray.push(array[i]);
    // otherwise
    else {
      // push the current sub array into the array of sub arrays
      sortedSubArrays.push(currentSubArray);
      // empty the current sub array
      currentSubArray = [array[i]];
    }
    
    if (i + 1 === array.length) {
      sortedSubArrays.push(currentSubArray);
    }
  }

  // return the array of sorted sub arrays
  return sortedSubArrays;
};
