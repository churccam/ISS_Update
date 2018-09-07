document.addEventListener("DOMContentLoaded", function(event) {     
    
    var astro_url = "http://api.open-notify.org/astros.json";
    var station_url = "http://api.open-notify.org/iss-now.json";
    

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
    
    


    
    var map_url_string = ""
    map_url_string = map_url_string.concat("https://maps.googleapis.com/maps/api/geocode/json?latlng=", lat, ",", long, "&key=AIzaSyABRfeQ5wogiKhzL28ZM-hk6tGiLHMfpcQ")
    console.log(map_url_string)
    var map_url = map_url_string;
    function Get(map_url){
        var map_Httpreq = new XMLHttpRequest();
        map_Httpreq.open("GET", map_Httpreq, false);
        map_Httpreq.send(null);
        return map_Httpreq.responseText;
    }

    var json_obj_map = JSON.parse(Get(map_url));
    console.log(json_obj_map.results);
    if (json_obj_map.results.length == 0){
        document.getElementById("above").append("Ocean");
    }
    else{
    var curCountry = json_obj_map.results[json_obj_map.results.length-2].formatted_address;
    console.log(curCountry);
    document.getElementById("above").append(curCountry);}
    
    
    
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

document.addEventListener("DOMContentLoaded", function(event){
    
})

lati = 45.5122;
longi = -122.6587;
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lati, lng: longi},
          zoom: 5
        });
} 
