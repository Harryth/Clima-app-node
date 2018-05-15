const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Ubicación de la ciudad para optener el clima',
        demand: true
    }
}).argv

const place = require('./place/place')
const temp = require('./weather/weather')


let getInfo = async(location) => {

    try {

        let geo = await place.getPlaceLatLng(location)
        let tmp = await temp.getWeather(geo.lat, geo.lng)

        return `La temperatura en: ${geo.address}, es de ${tmp} °C`
    } catch (e) {
        return `No es posible determinar la temperatura en: ${location}`
    }
}

getInfo(argv.location)
    .then(r => console.log(r))
    .catch(e => console.log(e))