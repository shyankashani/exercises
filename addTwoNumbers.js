var addTwoNumbers = (l1, l2) => {

  // Create a recursive function that accepts a node and a number so far array
  var convertListToNumber = (node, numberSoFar) => {
    // Unshift the number into the number so far array
    numberSoFar.unshift(node.val);
    // If the node has a next
    if (node.next) {
      // Perform the recursive function on the next node and the new number so far array
      convertListToNumber(node.next, numberSoFar);
    // Otherwise
    } else {
      // Return the joining and toNumberization of the new number so far array
      return Number(numberSoFar.join(''));
    }
  }

  // Declare a variable called n1 and set it equal to the recursive function performed on l1 node and an empty array
  var n1 = convertListToNumber(l1, []);

  // Declare a variable called n2 and set it equal to the recursive function performed on l2 node and an empty array
  var n2 = convertListToNumber(l2, []);

  // Create a recursive insert function that accepts a node and a val
  var insert = (node, val) => {
    // If the node's next is null
    if (!node.next) {
      // Set the node's next equal to a new node passing in the val
      node.next = new ListNode(val);
    // Else
    } else {
      // Perform the recursive insert function on the node's next
      insert(node.next, val);
    }
}

  // Declare a variable called outputList
  var outputList = new ListNode(0);

  // Create a recursive function that accepts a number
  var convertNumberToList = (number) => {
    // Convert the number into a string
    var string = number.toString();
    // Iterate through the string backward
    for (var i = string.length - 1; i > -1; i++) {
      if (i === string.length - 1) {
        outputList.val = Number(string[i])
      } else {
        // Insert the toNumberization of the string into the outputList
        insert(outputList, Number(string[i]));
      }
    }
  }

  convertNumberToList(n1 + n2);

  // Return the outputList
  return outputList;
}
