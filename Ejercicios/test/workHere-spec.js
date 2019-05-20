var chai = require('chai');
chai.should();

var results = require('../workHere.js');

describe('Billionaires', function() {
  describe('twentyYearOldBillionaires', function() {
    it('should be an array with billionaires in their twenties', function() {
      results.twentyYearOldBillionaires.should.have.length(9);
    });
  });

  describe('roundedWorth', function() {
    it('should be a new array with year, name and rounded worth', function() {
        results.roundedWorth.should.have.length(2614);
        let roundedWorthKeys = Object.keys(results.roundedWorth[0]);
        roundedWorthKeys.should.include.members(['year', 'name', 'worth']);
    });
  });

  describe('aggregatedWorth', function() {
    it('should be the sum rounded sum of all the billionaires worth', function() {
      results.aggregatedWorth.should.be.equal(9299);
    });
  });

  describe('richest', function() {
    it('should be an array', function() {
      results.richest.should.be.an('array');
    });

    it('should be Bill Gates', function() {
        results.richest[0].name.should.be.equal('Bill Gates');
    });
  });

  describe('poorest', function() {
    it('should be an array', function() {
        results.poorest.should.be.an('array');
      });
  
      it('should be Zhu Wenchen', function() {
          results.poorest[0].name.should.be.equal('Zhu Wenchen');
      });
  });

  describe('richAndPoor', function() {
    it('should be an array of the richest and poorest person', function() {
        results.richAndPoor.should.be.an('array');
        results.richAndPoor.should.have.length(2);
    });
  });
});
