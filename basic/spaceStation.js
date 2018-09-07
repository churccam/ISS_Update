document.addEventListener("DOMContentLoaded", function(event) {     
    
    var astro_url = "http://api.open-notify.org/astros.json"
    var station_url = "http://api.open-notify.org/iss-now.json"

    function Get(station_url){
        var station_Httpreq = new XMLHttpRequest();
        station_Httpreq.open("GET", station_Httpreq, false);
        station_Httpreq.send(null);
        return station_Httpreq.responseText;
    }

    var json_obj_station = JSON.parse(Get(station_url));
    var position = json_obj_station.iss_position;
    lat = position["latitude"];
    long = position["longitude"];
    console.log("Lat: "+ lat);
    console.log("Lon: "+ long);
    document.getElementById("lat").append(lat);
    document.getElementById("lon").append(long);


    
    
    
    
    function Get(astro_url){
        var astro_Httpreq = new XMLHttpRequest(); // a new request
        astro_Httpreq.open("GET",astro_url, false);
        astro_Httpreq.send(null);
        return astro_Httpreq.responseText;          
        }

    var json_obj_astro = JSON.parse(Get(astro_url));
    var personCount = json_obj_astro.number;
    var personArr = json_obj_astro.people;


    console.log("People in space: "+personCount);

    for (a in personArr){
        var newName = document.createElement("LI");
        var name = document.createTextNode(personArr[a]["name"]);
        console.log("Astro name: "+name);
        newName.appendChild(name);
        document.getElementById("crewSlots").appendChild(newName);
    }



});




      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }