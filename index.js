function setImages(obj){
    if(obj.weather[0].main=='Clouds'){
        document.getElementById('icon').src="./images/clouds.png";
    }else if(obj.weather[0].main=='Rain'){
        document.getElementById('icon').src="./images/rain.png";
    }else if(obj.weather[0].main=='Clear'){
        document.getElementById('icon').src="./images/clear.png";
    }else if(obj.weather[0].main=='Drizzle'){
        document.getElementById('icon').src="./images/drizzle.png";
    }else if(obj.weather[0].main=='Mist'){
        document.getElementById('icon').src="./images/mist.png";
    }else if(obj.weather[0].main=='Snow'){
        document.getElementById('icon').src="./images/snow.png";
    }else if(obj.weather[0].main=='Thunderstorm'){
        document.getElementById('icon').src="./images/thunder.png";
    }else if(obj.weather[0].main=='Haze'){
        document.getElementById('icon').src="./images/haze.png";
    }
}
function setDetails(obj){
    document.getElementById("searchDiv").style.display="none";
    document.getElementById('weather').innerHTML=obj.weather[0].description;
    document.getElementById('location-h2').innerText=obj.name;
    document.getElementById('temp').innerHTML=Math.round (obj.main.temp-273.15);
    document.getElementById('feel-temp').innerHTML=Math.round (obj.main.feels_like-273.15);
    document.getElementById('wind').innerHTML=obj.wind.speed+" ";
    document.getElementById('hum').innerHTML=obj.main.humidity;
    document.getElementById('container').style.display="block";
}
async function fetchDetailsViaSearch(){
    const response=await fetch(link)
    var obj= await response.json();
    if(obj.cod==404){
        document.getElementById('errorBox').innerText="Enter valid city name 🤦🏻‍♂️";
        document.getElementById('errorBox').style.display="block";

        return 0;
    }
    else if(obj.cod==400){
        document.getElementById('errorBox').innerText="Enter any city name 🤦🏻‍♂️";
        document.getElementById('errorBox').style.display="block";
        return 0;
    }else{
        setImages(obj);
        setDetails(obj);
    }
}
function getLinkViaSearch(){
    var city=document.getElementById('searchBox').value;
    link ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=e849931cbdc85f21a99a512497dabd45";
    fetchDetailsViaSearch()
}
function getLinkViaLocation(lat , long){
    link ="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=e849931cbdc85f21a99a512497dabd45";
    fetchDetailsViaSearch()
}
const input = document.getElementById("searchBox");
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getLinkViaSearch();
  }
});
document.getElementById("searchBtn").onclick=function(){
    navigator.geolocation.getCurrentPosition((position) => {
        getLinkViaLocation(position.coords.latitude, position.coords.longitude);
    });
}