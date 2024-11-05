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
 }