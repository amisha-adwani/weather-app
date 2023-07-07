


document.getElementById('submit').onclick = async function(){
    let city = document.getElementById('city')
    let cityValue = city.value
    const apikey= '';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric`
    const response = await fetch (url+`&appid=${apikey}` )
    let data = await response.json()
    console.log(data)
    let data2 = data.weather[0].description;
    let data3 = data.main.temp
    document.getElementById('display').innerText = data2+" "+ data3+'°C'
    console.log(data2,data3)
}