describe('arrayMaker', function() {
  it("it turns a string into an array split on characters", function() {
      expect(arrayMaker("kitten")).to.eql(['k', 'i', 't', 't', 'e', 'n']);
  })
});

describe('shifter', function() {
  it("it shifts the first consonants to the end", function() {
      expect(shifter("Venus")).to.equal("enusV");
  })
});

describe('checkConsonants', function() {
  it("it checks if the first letter is a consonant", function() {
      expect(checkConsonants("Mercury")).to.equal(true);
  })

  it("it returns false if the letter is not a consonant", function() {
    expect(checkConsonants("Uranus")).to.equal(false);
  })
});
