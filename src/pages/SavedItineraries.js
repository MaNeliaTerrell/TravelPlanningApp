import { checkToken } from "../utilities/users-service"

const SavedItineraries = () => {

    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate);
    }
    return(
        <div>
            <h1>Saved Itineraries</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        

        </div>
    )
}
export default SavedItineraries

