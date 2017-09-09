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

  var lists = [];
  var currentList = [];

  for (var i = 0; i < array.length; i++) {

    var lastIndex = currentList.length - 1;
    if (currentList.length !== 0 && array[i] < currentList[lastIndex]) {
      lists.push(currentList);
      currentList = [];
    }
    currentList.push(array[i]);
  }
  lists.push(currentList);

  while (lists.length > 1) {
    newLists
  }
};
