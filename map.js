var list_markers = [];
var banjir = 'water_small.png';
var aman = 'home_small.png';
function initMap() {
  var myLatlng = new google.maps.LatLng(-7.6711603,108.8670315);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 16,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'on' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });


  list_markers.push(new google.maps.Marker({
    map: map,
    draggable: false,
    icon: aman,
    label: 'aman',
    // animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(-7.67058881,108.87016654)
  }).addListener('click', function (e) {
    $('#keterangan_lokasi').html('Lokasi 1 Aman');
    var contentString = '<a href="#" onclick="javascript:$(\'#modalLokasi\').modal(\'show\');">Lokasi 1 aman</a>';
    // var contentString = this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3);
    new google.maps.InfoWindow({
    content: contentString
    }).open(map, this);
    console.log(this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3));
  }));
  list_markers.push(new google.maps.Marker({
    map: map,
    draggable: false,
    icon: aman,
    // animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(-7.67624544,108.86449099)
  }).addListener('click', function (e) {
    $('#keterangan_lokasi').html('Lokasi 4 Aman');
    var contentString = '<a href="#" onclick="javascript:$(\'#modalLokasi\').modal(\'show\');">Lokasi 4 Aman</a>';
    // var contentString = this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3);
    new google.maps.InfoWindow({
    content: contentString
    }).open(map, this);
    console.log(this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3));
  }));
  /*heatmap*/
  list_markers.push(new google.maps.Marker({
    map: map,
    draggable: false,
    icon: banjir,
    // animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(-7.67407844,108.86268571)
  }).addListener('click', function (e) {
    $('#keterangan_lokasi').html('Lokasi 3 Banjir');
    var contentString = '<a href="#" onclick="javascript:$(\'#modalLokasi\').modal(\'show\');">Lokasi 3 Banjir</a>';
    // var contentString = this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3);
    new google.maps.InfoWindow({
    content: contentString
    }).open(map, this);
    console.log(this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3));
  }));
  list_markers.push(new google.maps.Marker({
    map: map,
    draggable: false,
    icon: banjir,
    // animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(-7.67173716,108.87075663)
  }).addListener('click', function (e) {
    $('#keterangan_lokasi').html('Lokasi 2 Banjir');
    var contentString = '<a href="#" onclick="javascript:$(\'#modalLokasi\').modal(\'show\');">Lokasi 2 Banjir</a>';
    // var contentString = this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3);
    new google.maps.InfoWindow({
    content: contentString
    }).open(map, this);
    console.log(this.getPosition().lat().toFixed(3) + ',' + this.getPosition().lng().toFixed(3));
  }));
  /*
  map.addListener('click', function(e) {
    list_markers.push(new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: e.latLng.lat(), lng: e.latLng.lng()}
    }));
    // alert('Marker dropped: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '');
  });
  map.addListener('click', function (e) {
    console.log(e.latLng.lat().toFixed(3) + ',' + e.latLng.lng().toFixed(3));
  });
  */
}
