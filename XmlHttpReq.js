function fetchweather(){
    var city=document.getElementById("temp").value
    console.log(city);
    var request=new XMLHttpRequest();
    var apikey='518e68f9897def9ef7b422404cbb4a7f';
    var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=518e68f9897def9ef7b422404cbb4a7f&units=metric';
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        console.log(result.main.temp);
    }
    request.send();
    console.log("Fetching");
}