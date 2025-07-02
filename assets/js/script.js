const url = "http://api.weatherapi.com/v1/current.json?key=7152bbc5aac7467a885165613250503&q=London&aqi=yes"


const locationValue = document.querySelector('.location')
const tempData = document.querySelector('.temp-data')
const weatherStatus = document.querySelector('.weather-status')

const windValue = document.querySelector('.wv')
const precValue = document.querySelector('.pv')

const visData = document.querySelector('.vis-data')
const uvData = document.querySelector('.uv-data')
const pressData = document.querySelector('.pres-data')


async function fetchData(location){
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=7152bbc5aac7467a885165613250503&q=${location}&aqi=yes`
        const response = await fetch(url)
        const data = await response.json()
        
        let dataLoc = location.slice(0, 3).toUpperCase();
        let dataStatus = data.current.condition.text
        let datatemp = data.current.temp_c;
        let datawind = data.current.wind_mph;
        let dataprec = data.current.humidity
        let datavis = data.current.vis_miles
        let datauv = data.current.dewpoint_c
        let datapress = data.current.pressure_mb

        locationValue.innerText = dataLoc
        tempData.innerText = datatemp
        weatherStatus.innerText = dataStatus
        windValue.innerText = datawind + " mph"
        precValue.innerText = dataprec + " mm"
        visData.innerText = datavis + " m"
        uvData.innerText = datauv + " c"
        pressData.innerText = datapress + " mb"


    } catch (error) {
        console.log(error)
    }
}


const form = document.querySelector('form')
const searchLocation = document.querySelector('.value')

form.addEventListener('submit', search)

function search(e){
    e.preventDefault()
    fetchData(searchLocation.value)
}


