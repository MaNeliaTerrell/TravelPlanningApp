import './App.css';
import { useState} from 'react'
import AuthPage from './pages/AuthPage'
import Itinerary from './pages/Itinerary'
import SavedItineraries from './pages/SavedItineraries'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import Weather from './components/Weather';
import Forecast from './components/Forecast';


function App() {
  const [user, setUser] = useState(getUser())
 
  return (
    
    <main className="App">
      { 
      user ? (
        <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/itineraries" element={<Itinerary />} />
        {/* <Route path="" element={<Weather/>} /> */}
      </Routes>
      </>
       ) : (
        <AuthPage setUser={setUser}/>
    )}
    {/* <h1><img src="https://t3.ftcdn.net/jpg/04/99/60/98/240_F_499609814_YXsjaJPHzO5deLSEn7DkNnSyhNMgs1Xg.jpg" style={{width: "100%", height: "350px"}}/></h1> */}
  
        <Weather/>
  
    </main>
    
  );
}

export default App;
