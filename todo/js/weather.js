const API_KEY = 'aaa27313875f00a755edeefc92500459';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(respose=>respose.json()).then(data=>{
        const weatherContainer = document.querySelector('#weather .weatherContainer');
        const cityContainer = document.querySelector('#weather .city');
        const tempContainer = document.querySelector('#weather .temp');
        const name = data.name;
        const weather = data.weather[0].main;
        const temper = data.main.temp;
        weatherContainer.innerText = name;
        cityContainer.innerText = weather;
        tempContainer.innerText = `${temper}℃`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);