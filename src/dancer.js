var Dancer = function(top, left, timeBetweenSteps){
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){
    that.step();
  }, this._timeBetweenSteps);
};
Dancer.prototype.setPosition = function(){
  var styleSettings = {
    top: this._top,
    left: this._left
  };
  this.$node.css(styleSettings);
};