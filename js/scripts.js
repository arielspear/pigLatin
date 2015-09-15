var arrayMaker = function(input) {
  var inputArray = input.split('');

  return inputArray;
}

var checkConsonants = function(input) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var inputArray = input.split('');
  var firstLetter = inputArray[0];
  var result = ( 0 > vowels.indexOf(firstLetter));

  return result;
}

var shifter = function(input) {
  var inputArray = arrayMaker(input);

  var firstLetter = inputArray[0];
  var secondLetter = inputArray[1];

  if ((checkConsonants(firstLetter)) && checkConsonants(secondLetter)) {
    inputArray.shift();
    inputArray.shift();
    var newArray = inputArray.concat(firstLetter, secondLetter);
    var result = newArray.join("");

    return result;
  } else if (checkConsonants(firstLetter)) {
    inputArray.shift();
    var newArray = inputArray.concat(firstLetter);
    var result = newArray.join("");

    return result;
  } else {
    return input;
  }
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var input = $("input#input").val();

    $(".output").text("Haruka and Michiru forever!!");

    $("#result").show();
      event.preventDefault();
  });
});
