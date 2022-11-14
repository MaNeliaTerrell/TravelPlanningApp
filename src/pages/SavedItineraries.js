import { checkToken } from "../utilities/users-service"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { placesToVisit, activities, placesToEat, accommodation } from "../components/data";
import Itinerary from "./Itinerary";
import { useState } from 'react'
// import planSchema from "../../models/plan"
import { savingData } from '../utilities/plan-service'


const SavedItineraries = (props) => {
    const { savedItinerary } = props
   

    let state ={
        name: '',
        img: '',
        location:'',
        website:'',
        error:'',
    }

    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate);
    }

    const handleSave = async (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state))
        try {
            const { name, img, location, website} = this.state;
            const formSaved = {name, img, location, website
              };
              const planToSave = await savingData(formSaved)
              this.props.setSavedItinerary(savedItinerary)
              console.log(planToSave);
        } catch (error){
            // if we have an error
           console.log('Cannot Save from SavedItineraries file');
        }
        console.log(this.state);
    }

//    const DeletePlan = () => {
//     const [ savedItem, setSavedItem] = useState ([])
//    }
   

    return (
        <main>
            <h1>Saved Itineraries</h1>

            <div >Day 1


                <Card >

                    <Card.Text style={{ fontSize: '20px' }}>Itinerary</Card.Text>
                    <Card.Body style={{ flexWrap: 'wrap', flexDirection: 'row', display: 'flex', margin: '5px' }} >

                        <br />

                        {savedItinerary && savedItinerary.map((item, index) => (
                            <span>
                                <div key={index} className='saved itineraries' style={{ justifyContent: 'center', alignSelf: 'center', margin: '15px' }}>
                                    <img src={item.img} style={{ width: '125px', height: '125px', alignContent: 'center', alignItems: 'center', flexWrap: 'wrap', display: 'flex', margin: '10px' }} />
                                    <br />
                                    <div style={{ fontSize: '20px' }} >{item.name}</div>
                                    <br />
                                    <div style={{ fontSize: '20px' }} >{item.location}</div>
                                    <br />
                                    <a style={{ fontSize: '20px' }} href={item.website} >Website: </a>
                                    <div style={{ justifyContent: 'space-around', alignSelf: 'center' }}>
                                        <Button type='submit' style={{ alignContent: 'center' }} onClick={handleSave}>Save</Button>
                                        <Button style={{ alignContent: 'center' }} >Delete</Button></div>
                                </div>
                            </span>
                        ))}
                    </Card.Body>
                </Card>
            </div>

            <br />

            <div>
                <button onClick={handleCheckToken}>Check When My Login Expires</button>
            </div>



        </main>


    )
}



export default SavedItineraries

