AFRAME.registerSystem('skydive', {
  init: function() {
    var sceneEl = document.querySelector('a-scene');
    var position = sceneEl.camera.getAttribute('position');
    console.log(position);
  },
  update: function () {
    var sceneEl = document.querySelector('a-scene');
    var position = sceneEl.camera.getAttribute('position');
    console.log(position);
  }
});