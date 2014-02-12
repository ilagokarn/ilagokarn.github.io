
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/06155e782b2045288946065f2d11d8b5/997/256/{z}/{x}/{y}.png',
    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmadeUrl1='http://{s}.tile.cloudmade.com/06155e782b2045288946065f2d11d8b5/73457/256/{z}/{x}/{y}.png';

var minimal   = L.tileLayer(cloudmadeUrl, {minZoom: 5, maxZoom: 18,styleId: 22677, attribution: cloudmadeAttribution});
var minimap = L.tileLayer(cloudmadeUrl, {minZoom: 4, maxZoom: 10, attribution: cloudmadeAttribution});
//var max, scale, classes = 9, scheme = colorbrewer["YlOrRd"][classes];
var map = L.map('map', {
    center: new L.LatLng(37.7833, -122.4167),
    zoom: 13,
    layers: [minimal]
});

var miniMap = new L.Control.MiniMap(minimap, { toggleDisplay: true }).addTo(map);

var styles = [
    {
      featureType: 'all',
      stylers: [{hue: '#ff0000'}]
    }
 ];

var ggs = new L.Google('SATELLITE', {
	mapOptions: {
		styles: styles
	}
});

var ggr = new L.Google('ROADMAP', {
	mapOptions: {
		styles: styles
	}
});
var motorways = L.tileLayer(cloudmadeUrl1, {styleId: 73457, attribution: cloudmadeAttribution}); 

var baseMaps = {
    "Open Street Maps": minimal,
    "Open Street Motorways": motorways,
    "Google Satellite Maps": ggs,
    "Google Road Maps": ggr
};
var groupedOverlays = {
  "Hygiene Category": {
  },
  "Overview Heat Maps": {
  }
};

L.control.pan().addTo(map);

var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map);

$.getJSON('data/poor.geojson', function (data){
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'cutlery',
        markerColor: 'darkred',
        prefix: 'fa'
      });
    var markers = L.markerClusterGroup({
            iconCreateFunction: function (cluster) {
                    var childCount = cluster.getChildCount();
                    return L.divIcon({ html: childCount, className: 'marker-cluster marker-cluster-poor', iconSize: new L.Point(40, 40) });
            },
            //Disable all of the defaults:
            spiderfyOnMaxZoom: true, showCoverageOnHover: true, zoomToBoundsOnClick: true
    });
    var poorLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer){
            layer.bindPopup("<b>"+feature.properties.name+"<b><br/>Number of violations: "+feature.properties.number_of_violations);
            layer.setIcon(redMarker);
            layer.on('click', function(e) {
                var pos = e.latlng; // e is an event object (MouseEvent in this case)
                var panoramaOptions = {
                    position: pos,
                    pov: {
                      heading: 34,
                      pitch: 10
                    }
                  };
                  var panorama = new  google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
                  map.setStreetView(panorama);
            });
        }
    });
    markers.addLayer(poorLayer);
    map.addLayer(markers);  
    layerControl.addOverlay(markers,"Poor             ",  "Hygiene Category");
});

$.getJSON('data/improvement.geojson', function (data){
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'cutlery',
        markerColor: 'orange',
        prefix: 'fa'
      });
    var markers1 = L.markerClusterGroup({
            iconCreateFunction: function (cluster) {
                    var childCount = cluster.getChildCount();
                    return L.divIcon({ html: childCount, className: 'marker-cluster marker-cluster-improvement', iconSize: new L.Point(40, 40) });
            },
            //Disable all of the defaults:
            spiderfyOnMaxZoom: true, showCoverageOnHover: true, zoomToBoundsOnClick: true
    });
    var poorLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer){
            layer.bindPopup("<b>"+feature.properties.name+"<b><br/>Number of violations: "+feature.properties.number_of_violations);
            layer.setIcon(redMarker);
            layer.on('click', function(e) {
                var pos = e.latlng; // e is an event object (MouseEvent in this case)
                var panoramaOptions = {
                    position: pos,
                    pov: {
                      heading: 34,
                      pitch: 10
                    }
                  };
                  var panorama = new  google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
                  map.setStreetView(panorama);
            });
        }
    });
    markers1.addLayer(poorLayer);
    map.addLayer(markers1);  
    layerControl.addOverlay(markers1,"Needs Improvement", "Hygiene Category");
});

$.getJSON('data/adequate.geojson', function (data){
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'cutlery',
        markerColor: 'green',
        prefix: 'fa'
      });
    var markers2 = L.markerClusterGroup({
            iconCreateFunction: function (cluster) {
                    var childCount = cluster.getChildCount();
                    return L.divIcon({ html: childCount, className: 'marker-cluster marker-cluster-adequate', iconSize: new L.Point(40, 40) });
            },
            //Disable all of the defaults:
            spiderfyOnMaxZoom: true, showCoverageOnHover: true, zoomToBoundsOnClick: true
    });
    var poorLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer){
            layer.bindPopup("<b>"+feature.properties.name+"<b><br/>Number of violations: "+feature.properties.number_of_violations);
            layer.setIcon(redMarker);
            layer.on('click', function(e) {
                var pos = e.latlng; // e is an event object (MouseEvent in this case)
                var panoramaOptions = {
                    position: pos,
                    pov: {
                      heading: 34,
                      pitch: 10
                    }
                  };
                  var panorama = new  google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
                  map.setStreetView(panorama);
            });
        }
    });
    markers2.addLayer(poorLayer);
    map.addLayer(markers2);  
    layerControl.addOverlay(markers2, "Adequate         ", "Hygiene Category");
});

$.getJSON('data/good.geojson', function (data){
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'cutlery',
        markerColor: 'darkgreen',
        prefix: 'fa'
      });
    var markers1 = L.markerClusterGroup({
            iconCreateFunction: function (cluster) {
                    var childCount = cluster.getChildCount();
                    return L.divIcon({ html: childCount, className: 'marker-cluster marker-cluster-good', iconSize: new L.Point(40, 40) });
            },
            //Disable all of the defaults:
            spiderfyOnMaxZoom: true, showCoverageOnHover: true, zoomToBoundsOnClick: true
    });
    var poorLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer){
            layer.bindPopup("<b>"+feature.properties.name+"<b><br/>Number of violations: "+feature.properties.number_of_violations);
            layer.setIcon(redMarker);
            layer.on('click', function(e) {
                var pos = e.latlng; // e is an event object (MouseEvent in this case)
                var panoramaOptions = {
                    position: pos,
                    pov: {
                      heading: 34,
                      pitch: 10
                    }
                  };
                  var panorama = new  google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
                  map.setStreetView(panorama);
            });
        }
    });
    markers1.addLayer(poorLayer);
    map.addLayer(markers1);  
    layerControl.addOverlay(markers1, "Good             ", "Hygiene Category");
});

var heatmapViolations = new L.TileLayer.HeatCanvas({},{'step':1, 'degree':HeatCanvas.LINEAR, 'opacity':0.6});
var heatmapDensity = new L.TileLayer.HeatCanvas({},{'step':1, 'degree':HeatCanvas.LINEAR, 'opacity':0.6});
$.getJSON('data/inspectedPoints.geojson', function (data){
    L.geoJson(data, {
        onEachFeature: function (feature, layer){
            heatmapViolations.pushData(feature.properties.latitude, feature.properties.longitude, feature.properties.number_of_violations);
            heatmapDensity.pushData(feature.properties.latitude, feature.properties.longitude, 2);
        }
    });
    layerControl.addOverlay(heatmapViolations, "By Violations    ", "Overview Heat Maps");
    layerControl.addOverlay(heatmapDensity,"By Density       ", "Overview Heat Maps");
    
});

