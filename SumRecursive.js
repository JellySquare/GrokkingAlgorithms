var sumRecursive = function(list) {
  if(list.length <= 1) {
    return list[0];
  } else {
    return list[0] + sumRecursive(list.slice(1))
  }
}

var arr = [4, 1, 6, 2, 3, 9];
sumRecursive(arr)
