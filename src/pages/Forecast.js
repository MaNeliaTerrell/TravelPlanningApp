import Weather from "./Weather"


const Forecast = ({props}) => {
    const {minTemp, maxTemp, weatherType, weatherKey} = props
    return(
        <div>
            <div>Weather Type: {weatherType}</div>
            <div>Icon: {weatherKey} 
            <img 
            alt={''}
            src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}/></div>
            <div>Min. Temperature: {minTemp}
                Max. Temperature: {maxTemp}</div>
        </div>
    )
}
export default Forecast