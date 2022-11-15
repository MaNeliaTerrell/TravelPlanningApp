import { useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import * as userService from '../utilities/users-service';
import Itinerary from '../pages/Itinerary';

const NavBar = ({user, setUser}) => {
  
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

    return (
        <nav>
            <NavLink to='/saveditinerary' className='Nav' style={{ fontSize: '20px', color: 'white' }}>Saved Itinerary</NavLink> &nbsp; &nbsp; * &nbsp; &nbsp;
            <NavLink to='/itinerary' style={{ fontSize: '20px', color: 'white' }}>Itineraries</NavLink>
            
          <p style={myStyles.welcome}>Welcome, {user.name}!   <br/> <br/> </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7cvK7LzQjHUVCekEuD5oMpx056RiYmxXVOH2YHP-WhiYtB5E_M14DbUC40KNo0dUpgs&usqp=CAU.jpg" style={{ width: '45px', height: '45'}}/>
          <br/>
            <Link to="" onClick={handleLogOut} style={myStyles.welcome}>Log Out</Link>
        </nav>
    )
}

const myStyles = {
    welcome: {
        fontSize: '20px',
        color: 'white',
        fontWeight: 'bold'
    }
    
}
export default NavBar