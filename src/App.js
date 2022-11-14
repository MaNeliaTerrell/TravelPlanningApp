import '../src/App.css';
import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import Itinerary from './pages/Itinerary'
import SavedItineraries from './pages/SavedItineraries'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import Weather from './components/Weather';
import Modal from 'react-bootstrap'


function App() {
  const [user, setUser] = useState(getUser())
  const [savedItinerary, setSavedItinerary] = useState([])
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
  height: '35px', 
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

              <AuthPage setUser={setUser} style={{height: '50%', width: '50%'}}/>

            </div>
          </div>:'')
        )}

      {/* <h1><img src="https://t3.ftcdn.net/jpg/04/99/60/98/240_F_499609814_YXsjaJPHzO5deLSEn7DkNnSyhNMgs1Xg.jpg" style={{width: "100%", height: "350px"}}/></h1> */}
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
