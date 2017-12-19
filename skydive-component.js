AFRAME.registerComponent('skydive', {
  tick: function () {
    var position = this.el.getAttribute('position');
    
    if(position.y > 1) {
      this.el.setAttribute('position', {x: position.x, y: position.y - .5, z: position.z});
    }
  }
});