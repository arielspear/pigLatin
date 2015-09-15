var arrayMaker = function(input) {
  var inputArray = input.split('');
  return inputArray;
}

var shifter = function(input) {
  var inputArray = arrayMaker(input);

  var firstLetter = inputArray.shift();
  var newArray = inputArray.concat(firstLetter);
  var result = newArray.join("");
  return result;
}
