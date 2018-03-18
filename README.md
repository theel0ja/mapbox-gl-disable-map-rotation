# mapbox-gl-disable-map-rotation

## Usage
```html
<script>
    mapboxgl.accessToken = 'your_access_token';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10'
    });
</script>

<!-- Add zoom controls to map. -->
<script src="https://theel0ja.github.io/mapbox-gl-disable-map-rotation/dist/script.js?v=1"></script>
<link rel="stylesheet" href="https://theel0ja.github.io/mapbox-gl-disable-map-rotation/dist/style.css?v=1">
<script>
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Disable map rotation.
    disableMapRotation(map);
</script>
```
