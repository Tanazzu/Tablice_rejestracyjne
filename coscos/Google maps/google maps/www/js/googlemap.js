function init() {
  document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
  navigator.notification.beep(2);
  initMap();
}


      var marker;
      var lat = 45.45 ;
      var lng = 45.56;

   function initMap() {
        var mapa = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 13,
          center: {lat: lat, lng: lng}
        });

        marker = new google.maps.Marker({
          mapa: mapa,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: lat, lng: lng}
        });
        marker.addListener('click', toggleBounce);
        google.maps.event.addDomListener(window, 'load', initMap);
        
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


function map (lat, lon) {
    var latLon = lat + ',' + lon;

    if (device.platform.toUpperCase() === "ANDROID") {
        window.open("geo:" + latLon, "_system");
    } else if (device.platform.toUpperCase() === "IOS") {
        window.open("http://maps.apple.com/?sll=" + latLon + "&z=100&t=k", "_system");
    }
}
