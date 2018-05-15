const axios = require('axios')

let getWeather = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d6431d3268138de3615a3fb4bc896014`)

    return resp.data.main.temp
}

module.exports = {
    getWeather
}