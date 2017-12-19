AFRAME.registerComponent('skydive', {
  init: function() {
    var position = this.el.getAttribute('position');
    console.log(position);
  },
  tick: function () {
    var position = this.el.getAttribute('position');
    if(position.y > 1) {
      this.el.setAttribute('position', {x: position.x, y: position.y - .5, z: position.z});
    }
  }
});