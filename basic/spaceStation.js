
lati = 45.5122;
longi = -122.6587;
var map;
console.log("above map function");
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lati, lng: longi},
          zoom: 5
        });
    console.log("map added!");
} 
        console.log("mapFinished");


document.addEventListener("DOMContentLoaded", function(event) {     
    console.log("dom finished");
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
    /*Add lat and long to html page ------------------------------------*/
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
    
    /*Add current location to html page ------------------------------------*/
    if (json_obj_map.results.length == 0){
        document.getElementById("above").append("Ocean");
    }
    else{
    var curCountry = json_obj_map.results[json_obj_map.results.length-2].formatted_address;
    console.log(curCountry);
    document.getElementById("above").append(curCountry);}
    
    
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

    console.log("People in space: "+personCount);
    
    /*Add people to html page ------------------------------------*/
    for (a in personArr){
        var newName = document.createElement("LI");
        var name = document.createTextNode(personArr[a]["name"]);
        console.log("Astro name: "+name);
        newName.appendChild(name);
        document.getElementById("crewSlots").appendChild(newName);
    }
    
    console.log("ss.js is finished")
   
});
  
   
 



                                                  
                                                  