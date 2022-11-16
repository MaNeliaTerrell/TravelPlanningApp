import { checkToken } from "../utilities/users-service"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { placesToVisit, activities, placesToEat, accommodation } from "../components/data";
import Itinerary from "./Itinerary";
import { useState } from 'react'
// import planSchema from "../../models/plan"
// import { savingData } from '../utilities/plan-service'
// import axios from 'axios'


const SavedItineraries = (props) => {
    const { savedItinerary } = props

   

    // const state ={
    //     name: '',
    //     img: '',
    //     location:'',
    //     website:'',
    //     error:'',
    // }

    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate);
    }

    // const onSave = async (e) => {
    //     e.preventDefault()
    //     // console.log(savedItinerary);
    //     alert(JSON.stringify(this.state))
    //     try {
    //         const {name, img, location, website} = this.state
    //         const tripData=  {name, img, location, website} 

    //     const travelPlan = await axios.get('/api/plan')
        
    //     } catch (error) {
    //         console.log('Cannot Save');
    //     }
    // }

    // const removeElement=()=>{
    //     {savedItinerary.map(element =>)}
    // }



    return (
        <main>
            <h1>Saved Itineraries</h1>

            <div >Day 1


                <Card style={{backgroundImage: "linear-gradient(to right,  #0f9a46,#33caf3,#c5627b, #0f90a0 )"}}>

                    <Card.Text style={{ fontSize: '50px', color: 'white' }}>Itinerary</Card.Text>
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
                                        <Button type='button' style={{ alignContent: 'center' }} >Save</Button>
                                        <Button style={{ alignContent: 'center' }} onClick={this.props.remove('saved itineraries')}>Delete</Button></div>
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

