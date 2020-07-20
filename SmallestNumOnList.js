var findSmaller = function(list) {
  var low = list[0];
  for(let i = 0; i < list.length; i++) {
    if(low > list[i]) {
      low = list[i];
      console.log("found one!")
    } else {
      console.log("too low!")
      continue;
    }
  }
  return low
}

var arr = [
  13, 9,  9,  3,  3, 15,  2, 11,  8,
  15, 1, 11, 15, 15,  7,  4,  3, 15,
   7, 2,  7, 13,  6,  1, 11, 13, 11,
   1, 1,  1,  6,  4, 13
];

findSmaller(arr);
