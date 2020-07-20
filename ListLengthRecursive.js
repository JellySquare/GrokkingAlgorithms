var numList = function(list) {
  if(list.length === 0) {
    return 0;
  } else {
    return 1 + numList(list.slice(1));
  }
}

var arr = [1, 2, 3];
numList(arr);
