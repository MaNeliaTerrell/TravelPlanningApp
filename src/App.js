import '../src/App.css';
import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import Itinerary from './pages/Itinerary'
import SavedItineraries from './pages/SavedItineraries'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import Weather from './components/Weather';
import BackgroundSlider from './components/BackgroundSlider';



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

    <h1><img  style={{width: "100%", height: "250px"}}/></h1>

      {/* <BackgroundSlider/> */}

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
