import { useState, useEffect } from 'react'
import Forecast from './Forecast'


const Weather = () => {

  // state to hold the weather data
  const [weather, setWeather] = useState('')

  useEffect(() => {
    // console.log(weather)
  }, [weather]);


  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Coron%2C%20Palawan%2C%20Philippines/next7days?unitGroup=metric&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Ccloudcover%2Cconditions%2Cicon&key=MD3V4ER9SPR7GCLY5LBS4Z33Z&contentType=json"

  // Function to fetch weather data
  const getWeather = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);

      setWeather(data)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="weather">
      <button onClick={getWeather}>Get 8-Day Forecast</button>

      {weather && weather.days.map((i, index) => (
        <div key={index}>

          <Forecast
            minTemp={i.tempmin}
            maxTemp={i.tempmax}
            weatherType={i.conditions}
            weatherKey={i.icon}
            date={i.datetime}


          />
        </div>
      ))}

    </div>
  )

}


export default Weather