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

    // if the item is the last item
    if (i + 1 === array.length) {
      // push the current sub array into the array of sorted sub arrays
      sortedSubArrays.push(currentSubArray);
    }

    // if the current sub array is empty
    // or if the item in the array is greater than or equal to the last item in the current sub array
    if (!currentSubArray.length || currentSubArray[currentSubArray.length - 1] <= array[i])
      // push the item into the current sub array
      currentSubArray.push(array[i]);
    // otherwise
    else {
      // push the current sub array into the array of sub arrays
      sortedSubArrays.push(currentSubArray);
      // create a new current sub array with the item as the first item
      currentSubArray = [array[i]];
    }
  }

  // as long as there is more than one array in the array of sorted sub arrays
  while (sortedSubArrays.length > 1) {

    // create an array of merged sub arrays
    var mergedSubArrays = [];

    // iterate half the number of times as there are arrays in the array of sorted sub arrays
    for (var i = 0; i < Math.floor(sortedSubArrays.length / 2); i++) {
      // merge the sub array with the next sub array
      var mergedSubArray = merge(sortedSubArrays[i * 2], sortedSubArrays[i * 2 + 1]);

      // push the merged sub array into the array of merged sub arrays
      mergedSubArrays.push(mergedSubArray);
    }

    // if there are an odd number of sorted sub arrays
    if (sortedSubArrays.length % 2) {
      // push the last sorted sub array into the array of merged sub arrays
      mergedSubArrays.push(sortedSubArrays[sortedSubArrays.length - 1]);
    }

    // set the array of sorted sub arrays equal to the array of merged sub arrays
    sortedSubArrays = mergedSubArrays;
  }

  // return the sorted array
  return sortedSubArrays[0];

};
