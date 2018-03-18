/*
 * Disable Map rotation
 */
function disableMapRotation(map) {
  // disable map rotation using right click + drag
  map.dragRotate.disable();
  // disable map rotation using touch rotation gesture
  map.touchZoomRotate.disableRotation();
}
