let key="12e8e3e99c28241581696f5892af7f5d";
async function getWeatherData(){
    try{
    let city =document.querySelector("#city").value
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    let res2 =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${key}&units=metric`)
    let data2=await res2.json();
    let data3=data2.list;
    let date = new Date();
    let week = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
        let day=date.getDay()
        for(let i=0;i<8;i++){
            if(day>6){
                day=0;
            }
            data3[i].main.day=week[day]
            day++;
        }
    let data=await res.json();
    showWeather(data);
    showWeather7day(data3);
    console.log(' data3', data3);
    }
    catch(err)
    {
        console.log(' err', err);
    }
}

function showWeather(data){
 document.querySelector("#container").innerHTML="";
console.log(' data', data);
let name=document.createElement("h3");
name.innerText="City-"+" "+data.name;
let temp=document.createElement("h3");
temp.innerText="Temp-"+" "+data.main.temp+"°C";
let tempmax=document.createElement("p");
tempmax.innerText="Temp max-"+" "+data.main.temp_max+"°C";
let tempmin=document.createElement("p");
tempmin.innerText="Temp min-"+" "+data.main.temp_min+"°C";
let humidity=document.createElement("p");
humidity.innerText="Humidity-"+" "+data.main.humidity;
let pressure=document.createElement("p");
pressure.innerText="Pressure-"+" "+data.main.pressure;
let sunrise=document.createElement("p");
sunrise.innerText="Sunrise-"+" "+data.sys.sunrise;
let sunset=document.createElement("p");
sunset.innerText="Sunset-"+" "+data.sys.sunset;
let clouds=document.createElement("p");
clouds.innerText="Clouds-"+" "+data.clouds.all;
let iframe=document.createElement("iframe");
iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

let box1=document.createElement("div");
let box2=document.createElement("div");
box1.append(name,temp,tempmax,tempmin,humidity,clouds,pressure,sunrise,sunset)
box2.append(iframe)
document.querySelector("#container").append(box1,box2)

}

function showWeather7day(data){
    document.querySelector("#daily").innerHTML="";
   console.log(' data', data);
   
 
   /* Create an array of week name */

   data.forEach(function(el){
    let box=document.createElement("div");
    let day=document.createElement("p");
day.innerText=el.main.day;
let image=document.createElement("img");
if(el.weather[0].description==="few clouds")
{
    image.src="https://webstockreview.net/images/cloudy-clipart-weather-icon-14.png"
}
else if(el.weather[0].description==="clear sky"){
    image.src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-clear.png"
}
else if(el.weather[0].description==="scattered clouds"){
    image.src="https://webstockreview.net/images/cloudy-clipart-cluds-5.png"
}
else if(el.weather[0].description==="overcast clouds"||"broken clouds"){
    image.src="https://cdn4.iconfinder.com/data/icons/web-design-and-development-3-9/48/121-512.png"
}
else if(el.weather[0].description==="light rain"){
    image.src="https://cdn2.iconfinder.com/data/icons/weather-367/64/weather-sun-cloud-rain-512.png"
}
console.log(' el.weather[0].description', el.weather[0].description);
    let tempmax=document.createElement("p");
tempmax.innerText=el.main.temp_max+"°";
let tempmin=document.createElement("p");
tempmin.innerText=el.main.temp_min+"°";
box.append(day,image,tempmax,tempmin)
document.querySelector("#daily").append(box);
   })
}



