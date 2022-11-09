import Weather from "./Weather"


const Forecast = (props) => {
    const {minTemp, maxTemp, weatherType, weatherKey, date} = props
    return(

        <div>
            <div>Date: {date}</div>
            <div>Weather Type: {weatherType}</div>
            <div>Icon: {weatherKey}</div>
            <div>Min. Temperature: {minTemp}
                Max. Temperature: {maxTemp}</div>
        </div>
    )
}
export default Forecast