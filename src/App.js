import './App.css';
import { useState} from 'react'
import AuthPage from './pages/AuthPage'
import Itineraries from './pages/Itineraries'
import OrderHistoryPage from './pages/OrderHistoryPage'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import Weather from './pages/Weather';
import Forecast from './pages/Forecast';


function App() {
  const [user, setUser] = useState(getUser())
 

  return (
    <>
    <h1><img src="https://t3.ftcdn.net/jpg/04/99/60/98/240_F_499609814_YXsjaJPHzO5deLSEn7DkNnSyhNMgs1Xg.jpg" style={{width: "100%", height: "350px"}}/></h1>
    <main className="App">
        {/* <p>App</p>
        <button onClick="togglePopup()" class="first-button">Log In</button> */}

        <Weather/>

      { 
      user ? (
        <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/forecast" element={<Weather/>} />
      </Routes>
      </>
       ) : (
        <AuthPage setUser={setUser}/>
    )}
    </main>
    </>
  );
}

export default App;
