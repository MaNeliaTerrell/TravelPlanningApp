import { checkToken } from "../utilities/users-service"

const OrderHistoryPage = () => {

    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate);
    }
    return(
        <div>
            <h1>Order History</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        

        </div>
    )
}
export default OrderHistoryPage

