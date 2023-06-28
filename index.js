link ="https://api.openweathermap.org/data/2.5/weather?q=bishnupur&appid=e849931cbdc85f21a99a512497dabd45";
var request= new XMLHttpRequest();
request.open('GET',link,true);
request.onload=function(){
    var obj=JSON.parse(this.response);
    if(obj.cod==404){
        document.getElementById('location-h2').innerText="Enter valid city name 🤦🏻‍♂️";
        document.getElementById('location-h2').style.display="block";
        return 0;
    }
    console.log(obj)
    document.getElementById('icon').src="https://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
    document.getElementById('weather').innerHTML=obj.weather[0].description;
    document.getElementById('location').innerHTML=obj.name;
    document.getElementById('temp').innerHTML=Math.round (obj.main.temp-273.15);
    document.getElementById('icon').style.display="block";
    document.getElementById('weather').style.display="block";
    document.getElementById('location-h2').style.display="block";
    document.getElementById('temp-h4').style.display="block";
}
request.send();
