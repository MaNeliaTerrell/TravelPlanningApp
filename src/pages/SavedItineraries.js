import { checkToken } from "../utilities/users-service"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { placesToVisit, activities, placesToEat, accommodation } from "../components/data";
import Itinerary from "./Itinerary";
import { useState } from 'react'


const SavedItineraries = (props) => {
    const { savedItinerary } = props

    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate);
    }

    return (
        <main>
            <h1>Saved Itineraries</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>Day 1

                
                <Card style={{ flexWrap: 'wrap', width: '100%', height: '150px' }}>

                    <Card style={{ flexWrap: 'wrap' }}>
                        <Card.Body >

                            {savedItinerary && savedItinerary.map(place => (
                                <div >
                                    <img src={place.img} style={{ width: '100px', height: '100px' }} />
                                    {place.name}
                                </div>
                            ))}

                            <Card.Text>Place/s to Visit</Card.Text>
                            <Button >Save</Button>

                        </Card.Body>
                    </Card>


                    <Card style={{ flexWrap: 'wrap' }}>
                        <Card.Body>

                        {savedItinerary && savedItinerary.map(activities => (
                                <div >
                                    <img src={activities.img} style={{ width: '100px', height: '100px' }} />
                                    {activities.name}
                                </div>
                            ))}

                            <Card.Text>
                                Activities
                            </Card.Text>
                            <Button >Save</Button>

                        </Card.Body>

                    </Card>


                    <Card style={{ flexWrap: 'wrap' }}>
                        <Card.Body>

                            <Card.Img variant="top" />
                            <Card.Text>
                                Where to Eat
                            </Card.Text>
                            <Button >Save</Button>

                        </Card.Body>
                    </Card>

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

