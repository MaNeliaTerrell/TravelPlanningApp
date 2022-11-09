import { useState, useEffect } from 'react'
import Forecast from './Forecast'





const Weather = () => {

 // state to hold the weather data
 const [weather, setWeather] = useState('')

 useEffect (() => {
    console.log(weather)
}, [weather]);

//  Make icons with 1 digit appear
const iconNum = (num) => {
    const numStr = num + '';
    const length = numStr.length

    if (length === 1) {
        return '0' + numStr;
    } else{
        return numStr;
    }
    }


  const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/265246?apikey=JGAOhKPgQl7GSB0N2qI17NbiaHtuOjkX&language=en-us&details=true"

// Function to fetch weather data
  const getWeather = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
    //   map through the array (just 3 properties)
      setWeather(res.DailyForecasts.map(forecast =>{
        return {
            minTemp: forecast.Temperature.Minimum.Value,
            maxTemp: forecast.Temperature.Maximum.Value,
            weatherType: forecast.Day.IconPhrase,
            weatherKey: iconNum(forecast.Day.Icon),
        }
      })); //set the data into our state
    } catch (error) {
      console.log(error);
    }
  }


    return(
        <div className="weather">
            <button onClick={getWeather}>Get 5-Day Forecast</button>
            {!!weather && weather.map((i, index) => (
            <div key={index}>
                <Forecast 
                minTemp={i.minTemp} 
                maxTemp={i.maxTemp}
                weatherType={i.weatherType}
                weatherKey={i.weatherKey}

                // props={weather}

                />
            </div>
            ))}
           
        </div>
    )

    }


export default Weather