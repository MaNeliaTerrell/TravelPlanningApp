import Weather from "./Weather"


const Forecast = (props) => {
    const { weatherKey, minTemp, maxTemp, weatherType,date} = props
    return(

        <div>
            <div>icon:{weatherKey}</div>
            <div>Date: {date}</div>
            <div>Weather Type: {weatherType}</div>
            <div>Min. Temperature: {minTemp}
                Max. Temperature: {maxTemp}</div>
        </div>
    )
}
export default Forecast