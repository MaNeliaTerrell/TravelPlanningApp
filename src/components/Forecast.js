import Weather from "./Weather"
import '../../src/App.css'


const Forecast = (props) => {
    const { minTemp, maxTemp, weatherType,date} = props
    return(

        <div className='weather'>
         
            <div>Date: {date}</div> 
            <br/>
            <div>Weather Type: {weatherType}</div>
            <br/>
            <div>Min. Temperature: {minTemp}
            <br/> &nbsp; &nbsp;
                Max. Temperature: {maxTemp}</div>
        </div>
    )
}
export default Forecast