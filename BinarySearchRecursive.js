var binarySearchRecursive = function(list, num, min = 0, max = list.length - 1) {
  var mid = Math.floor(((max - min) / 2) + min);

  console.log(list[mid])
  if(num === list[mid]) {
    return "Found! " + list[mid];
  } else if(list[mid] < num) {
    console.log("Too low!")
    return binarySearchRecursive(list, num, mid + 1, max);
  } else if(list[mid] > num) {
    console.log("Too high!")
    return binarySearchRecursive(list, num, min, mid);
  }
}

var arr = [1, 3, 4, 5, 8, 10, 11, 14, 15, 20, 23, 25, 27, 35, 36, 37, 40, 43, 55, 58, 59, 61, 63, 64, 65, 66, 67, 69, 70, 73, 74, 134];
binarySearchRecursive(arr, 134);
