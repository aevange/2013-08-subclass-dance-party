var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="BlinkyDancer"></span>');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to  new version of step
  Dancer.prototype.step.call(this);
  this._$node.toggle();
};