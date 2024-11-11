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
    static async fetchCity(coords: coord) {
        try {
            const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.lng}&localityLanguage=fr`);
            
            
            const city = response.data.localityInfo.administrative[2].name || "Ville inconnue";
            const state = response.data.city || "Région inconnue";

            return `${state}`;
        } catch (error) {
            console.error("Erreur lors de la récupération de la ville :", error);
            return "Localisation inconnue";
        }
    }
    static async fetchCoordFromCity(city:string){
        try {
            const {latitude:lat,longitude:lng} = (await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`)).data.results[0]
            return {lat,lng}
        } catch (error) {
            console.log(error)
            
        }
    }
    
    
  
 }
 // https://nominatim.openstreetmap.org/reverse?format=json&lat=-18.9008734&lon=47.5157285
 // https://api.open-meteo.com/v1/forecast?latitude=-18.9008734&longitude=47.5157285&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true