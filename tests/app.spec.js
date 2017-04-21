/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const sumSeries = require('../app.js');

describe('sum series function', () => {
  it('should be a function', () => {
    expect(sumSeries).to.be.a('function');
  });

  it('should return true if any consecutive sum equals number passed through', () => {
    expect(sumSeries([2,4,6], 10)).to.equal(true);
    expect(sumSeries([5,6,1,2,7], 10)).to.equal(true);
    expect(sumSeries([5], 5)).to.equal(true);
  });

  it('should return false if any consecutive sum does NOT equal number passed through', () => {
    expect(sumSeries([2,4,6], 120)).to.equal(false);
    expect(sumSeries([5,4,3,2,1], 920)).to.equal(false);
  });


});