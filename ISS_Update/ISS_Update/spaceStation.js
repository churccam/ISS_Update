    var astro_url = "http://api.open-notify.org/astros.json";
    var station_url = "http://api.open-notify.org/iss-now.json";
    
    /*Request current ISS location ------------------------------------*/
    function Get(station_url){
        var station_Httpreq = new XMLHttpRequest();
        station_Httpreq.open("GET", station_Httpreq, false);
        station_Httpreq.send(null);
        return station_Httpreq.responseText;
    }
    /*Parse location info ------------------------------------*/
    var json_obj_station = JSON.parse(Get(station_url));
    var position = json_obj_station.iss_position;
    lat = position["latitude"];
    long = position["longitude"];
    console.log("Lat: "+ lat);
    console.log("Lon: "+ long);
    /*Add lat and long to popup page ------------------------------------*/
    document.getElementById("lat").append(lat);
    document.getElementById("lon").append(long);
    
    
  
    /*Request location (country) information about late and long ------------------------------------*/
    var map_url_string = ""
    map_url_string = map_url_string.concat("https://maps.googleapis.com/maps/api/geocode/json?latlng=", lat, ",", long, "&key=AIzaSyABRfeQ5wogiKhzL28ZM-hk6tGiLHMfpcQ")
    var map_url = map_url_string;
    function Get(map_url){
        var map_Httpreq = new XMLHttpRequest();
        map_Httpreq.open("GET", map_Httpreq, false);
        map_Httpreq.send(null);
        return map_Httpreq.responseText;
    }

    /*Parse location info ------------------------------------*/
    var json_obj_map = JSON.parse(Get(map_url));
    console.log(json_obj_map.results);
    

    
    
    /*Request current people ------------------------------------*/
    function Get(astro_url){
        var astro_Httpreq = new XMLHttpRequest(); // a new request
        astro_Httpreq.open("GET",astro_url, false);
        astro_Httpreq.send(null);
        return astro_Httpreq.responseText;          
        }
    
    /*Parse results of current people ------------------------------------*/
    var json_obj_astro = JSON.parse(Get(astro_url));
    var personCount = json_obj_astro.number;
    var personArr = json_obj_astro.people;

    /*Add map to page ------------------------------------*/
    lati = parseInt(lat)
    longi = parseInt(long)
    var myLatLng = {lat: lati, lng: longi};

    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lati, lng: longi},
            mapTypeControl: false,
            streetViewControl: false,
            zoom: 3,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
          },
            fullscreenControl: false,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_LEFT
          },
            styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#304a7d"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          { 
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ] 
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ],
            });
        
        /*Add marker to map*/
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'ISS',
            icon: "images/space-station.png"
        });
    } 
            console.log("Map creation successful");

    
    
document.addEventListener("DOMContentLoaded", function(event) {
    /*Add current location to page ------------------------------------*/
    if (json_obj_map.results.length == 0){
        document.getElementById("above").append("Ocean");
    }
    else{
    var curCountry = json_obj_map.results[json_obj_map.results.length-2].formatted_address;
    console.log(curCountry);
    document.getElementById("above").append(curCountry);}
    
    /*Add people to page ------------------------------------*/
    for (a in personArr){
        var newName = document.createElement("LI");
        var name = document.createTextNode(personArr[a]["name"]);
        newName.appendChild(name);
        document.getElementById("crewSlots").appendChild(newName);
    }
    
    
})
   

  
   
 



                                                  
                                                  