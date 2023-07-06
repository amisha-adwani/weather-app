
const apikey= '';
const url ='https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric'



document.getElementById('submit').onclick= async function(){
    const response = await fetch (url+ `&appid=${apikey}`)
    let data = await response.json()
    console.log(data.weather)
    let data2 = data.weather[0].main;
    document.getElementById('display').innerText = data2
}