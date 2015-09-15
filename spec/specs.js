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
