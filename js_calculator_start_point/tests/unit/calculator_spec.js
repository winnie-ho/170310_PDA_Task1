var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('calculator can multiply', function(){
  	calculator.numberClick(3);
  	calculator.operatorClick("*");
  	calculator.numberClick(5);
  	calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })

  it('calculator can divide', function(){
  	calculator.numberClick(21);
  	calculator.operatorClick("/");
  	calculator.numberClick(7);
  	calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  })

  it('calculator can add values together', function(){
  	calculator.numberClick(1);
  	calculator.operatorClick("+");
  	calculator.numberClick(4);
  	calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  })

  it('calculator can subtract', function(){
  	calculator.numberClick(7);
  	calculator.operatorClick("-");
  	calculator.numberClick(4);
  	calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  })

  it('concatenate multiple number button clicks', function(){
  	calculator.numberClick(1);
  	calculator.numberClick(0);
  	calculator.numberClick(0);
  	calculator.operatorClick("-");
  	calculator.numberClick(4);
  	calculator.numberClick(0);
  	calculator.operatorClick("=");
    assert.equal(60, calculator.runningTotal);
  })

  it('chain multple operations together', function(){
  	calculator.numberClick(1);
  	calculator.numberClick(0);
  	calculator.operatorClick("-");
  	calculator.numberClick(4);
  	calculator.operatorClick("-");
  	calculator.numberClick(1);
  	calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  })

  it('clear the running total without affecting the calculation', function(){
  	calculator.numberClick(5);
  	calculator.operatorClick("-");
  	calculator.numberClick(4);
  	calculator.clearClick();
  	calculator.numberClick(1);
  	calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })

});
