const axios = require('axios')

let getPlaceLatLng = async(location) => {

    let encodedUrl = encodeURI(location)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAjoFcxY9ld2_HOkDLqUohN2jZd2aT4NsU`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${location}`)
    }

    let mapLocation = resp.data.results[0]
    let coords = mapLocation.geometry.location

    return {
        address: mapLocation.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getPlaceLatLng
}