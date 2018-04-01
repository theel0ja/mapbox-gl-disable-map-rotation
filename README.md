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
<script src="https://cdn.theel0ja.info/libs/mapbox-gl-disable-map-rotation/dist/script.js"></script>
<link rel="stylesheet" href="https://cdn.theel0ja.info/libs/mapbox-gl-disable-map-rotation/dist/style.css">
<script>
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Disable map rotation.
    disableMapRotation(map);
</script>
```
