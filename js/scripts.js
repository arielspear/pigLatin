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

var checkConsonants = function(input) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var inputArray = input.split('');
  var firstLetter = inputArray[0];
  var result = ( 0 > vowels.indexOf(firstLetter));

  return result;
}
