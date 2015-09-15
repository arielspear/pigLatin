describe('arrayMaker', function() {
  it("turns a string into an array split on characters", function() {
      expect(arrayMaker("kitten")).to.eql(['k', 'i', 't', 't', 'e', 'n']);
  })
});

describe('checkConsonants', function() {
  it("checks if the first letter is a consonant", function() {
      expect(checkConsonants("Mercury")).to.equal(true);
  })

  it("returns false if the letter is not a consonant", function() {
    expect(checkConsonants("Uranus")).to.equal(false);
  })
});

describe('shifter', function() {
  it("shifts the first consonants to the end", function() {
      expect(shifter("Venus")).to.equal("enusV");
  })

  it("does not shift if the first letter is a vowel", function() {
      expect(shifter("Ariel")).to.equal("Ariel");
  })

  it("shifts until it reaches a vowel", function() {
      expect(shifter("Think")).to.equal("inkTh");
  })
});

describe('addAy', function() {
  it("adds ay onto the end of a shifted word", function() {
      expect(addAy("Neptune")).to.equal("eptuneNay");
  })
});
