import React from 'react'
import { placesToVisit, activities, placesToEat, accommodation } from "../components/data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Itinerary = (props) => {
    const {savedItinerary, setSavedItinerary} = props

    return (
        <div>

            <h1>Itinerary</h1>

            <div>

                    <h1>Places to Visit</h1>
               <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {placesToVisit.map((place, index) => (
                    <div style={{ margin: '10px' }} key={index}>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={place.img} />
                        <Card.Body>
                            <Card.Title>{place.name}</Card.Title>
                            <Card.Text>
                                Description
                            </Card.Text>
                            <Button onClick={() => setSavedItinerary([...savedItinerary, place])} variant="success">Add to itinerary</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
                </div>
                
            </div>
            <div>
                
                <h1>Activities</h1>
           <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {activities.map((activities, index) => (
                <div style={{ margin: '10px' }} key={index}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={activities.img} />
                    <Card.Body>
                        <Card.Title>{activities.name}</Card.Title>
                        <Card.Text>
                           {activities.location} 
                           <br/>
                           <a href={activities.website}>Visit the Website</a>
                        </Card.Text>
                        <Button onClick={() => setSavedItinerary([...savedItinerary, activities])} variant="success">Add to itinerary</Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
            
        </div>
        <div>
                
                <h1>Places to Eat</h1>
           <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {placesToEat.map((food, index) => (
                <div style={{ margin: '10px' }} key={index}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={food.img} />
                    <Card.Body>
                        <Card.Title>{food.name}</Card.Title>
                        <Card.Text>
                        {food.location} 
                           <br/>
                           <a href={food.website}>Visit the Website</a>
                        </Card.Text>
                        <Button onClick={() => setSavedItinerary([...savedItinerary, food])} variant="success">Add to itinerary</Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
            
        </div>

        <div>
                
                <h1>Places to Stay</h1>
           <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {accommodation.map((stay, index) => (
                <div style={{ margin: '10px' }} key={index}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={stay.img} />
                    <Card.Body>
                        <Card.Title>{stay.name}</Card.Title>
                        <Card.Text>
                        {stay.location} 
                           <br/>
                           <a href={stay.website}>Visit the Website</a>
                        </Card.Text>
                        <Button onClick={() => setSavedItinerary([...savedItinerary, stay])} variant="success">Add to itinerary</Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
            
        </div>

       

        </div>
    )
}
export default Itinerary