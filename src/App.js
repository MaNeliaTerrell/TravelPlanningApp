import '../src/App.css';
import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import Itinerary from './pages/Itinerary'
import SavedItineraries from './pages/SavedItineraries'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import Weather from './components/Weather';




function App() {
  const [user, setUser] = useState(getUser())
  const [savedItinerary, setSavedItinerary] = useState([])

  // const [savedPlan, setSavedPlan] = useState([]) 

  const [popUp, setPopUp] = useState(false)


  const handleClickOpen = () => {
    setPopUp(!popUp)
  }
  const closePopUp = () => {
    setPopUp(false)
  }

  return (

    <main className="App" >
      <button className='loginButton' onClick={handleClickOpen}><img src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' style={{width: '35px', 
  height: '35px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' , 
  backgroundColor: 'white',
  }} /></button>
      <div>
      </div>

      {
        user ? (
          <div>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/itinerary" element={<Itinerary setSavedItinerary={setSavedItinerary} savedItinerary={savedItinerary} />} />
              <Route path="/saveditinerary" element={<SavedItineraries savedItinerary={savedItinerary} />} />
            </Routes>
          </div>
        ) : (
          (popUp ?
          <div className='popup'>
            <div className='popup-header'>
              <h1 onClick={closePopUp}>x &nbsp; &nbsp;</h1>

              <AuthPage setUser={setUser} style={{height: '20%', width: '20%'}}/>

            </div>
          </div>:'')
        )}
          <img src="https://farm5.staticflickr.com/4743/26656856948_a474bd941c_b.jpg" style={{width: '100%', height: '450px', margin: '10px'}}></img>
          <br/>
          <p style={{fontSize: '15px', color: "white", fontFamily: 'Papyrus', display: 'grid', backgroundColor: 'rgba(15, 29, 51, 0.75)', textAlign: 'justify', margin: '15px', padding: '20px'}}>{'\t'}The paradisal province of Palawan is a constant feature in many international “Best In The World” lists, thanks to its rich and diverse flora and fauna, and much-preserved natural attractions. Discover why healthy ecotourism is such an essential part in maintaining the natural wonders of this heaven on earth.
<br/>
<br/>
{'\t'}
To say Palawan is a beach bum's fantasy is an understatement. Sailing the length of the province­ from the north to the southern tip of the main island-brings you up close and personal with paradise in countless forms: from the coral-fringed dreamscapes of the Calamianes and the karst limestone formations of El Nido, to the wind-swept shorelines of central Palawan and the pristine sandbars of Balabac.
<br/>
<br/>
Quite simply, Palawan has the best beaches—not only in the Philippines, but in all of southeast Asia. The best part? Only a fraction of them are known.
<br/>
<br/>
Palawan has always had an environmental streak. It was one of the first provinces to crack down on litter, noise pollution, and single-use plastics. A lot is at stake, as the province's booming tourism industry relies on the successful preservation of its pristine ecology and natural beauty. Against this backdrop, several award­ winning resorts are leading the way toward a more sustainable future, blending native design and low­ carbon elements like solar panels, composting, and edible gardens to create living spaces that will last.</p> 

      {/* <BackgroundSlider  /> */}

      {/* <img  src="https://windows10spotlight.com/wp-content/uploads/2020/09/0ef88fa434c849a3472ec0af13970f6f.jpg" /> */}
      <br />
      <br />

      <br />
      <br />
      <br />
      <div>
        <Weather />
      </div>
    </main>

  );
}



export default App;
