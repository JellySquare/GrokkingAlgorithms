var findMax = function(list) {
  var max = list[0];
  for(let i = 0; i < list.length; i++) {
    if(list[i] > max) {
      console.log("Found a number bigger than: " + max)
      max = list[i];
    } else continue;
  }
  return max;
}

var arr = [
  17, 50, 62, 57, 38, 17, 63, 39, 53,
  48, 32, 11, 40, 64, 58, 53, 49, 33,
  62,  4, 31, 62, 46, 11, 51, 32, 28,
  39, 58, 43, 32, 10, 12
];
          
findMax(arr);
