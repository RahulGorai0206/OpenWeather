link ="https://api.openweathermap.org/data/2.5/weather?q=bishnupur&appid=e849931cbdc85f21a99a512497dabd45";
var request= new XMLHttpRequest();
request.open('GET',link,true);
request.onload=function(){
    var obj=JSON.parse(this.response);
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
if(request.status>=200 && request.status<400){
    var temp=obj.main.temp;
}else{
    console.log("City Data Unavailable");
}
request.send();