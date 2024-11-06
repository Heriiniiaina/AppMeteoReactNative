import axios from "axios"
type coord = {
    lat:number,
    lng:number
}
export class MeteoApi{
    static async fetchWeather(coords:coord){
        return (
            await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`)
        ).data
    }
    static async fetchCity(coords:coord){
       
       const res =  await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`)
       
        return res.data
    }
 }
 // https://nominatim.openstreetmap.org/reverse?format=json&lat=-18.9008734&lon=47.5157285
 // https://api.open-meteo.com/v1/forecast?latitude=-18.9008734&longitude=47.5157285&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true