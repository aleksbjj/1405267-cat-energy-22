function initMap() {
  let pos = { lat: 59.938635, lng: 30.323118 };
  let opt = {
    center: pos,
    zoom: 17,
    disableDefaultUI: true
  };
  if (window.matchMedia("(min-width: 768px)").matches) {
    let map = new google.maps.Map(document.getElementById('map'), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin.png.png"
    });
  } else {
    let map = new google.maps.Map(document.getElementById('map'), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin-big.png"
    });
  }
}
