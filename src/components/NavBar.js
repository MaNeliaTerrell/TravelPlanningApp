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
            <NavLink to='/saveditinerary' className='Nav'>Saved Itinerary</NavLink> &nbsp; | &nbsp;
            <NavLink to='/itinerary'>Itineraries</NavLink>
            
          <p style={myStyles.welcome}>Welcome, {user.name}!   <br/> <br/> </p>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}

const myStyles = {
    welcome: {
        fontSize: '15px',
        color: 'darkgreen',
        fontWeight: 'bold'
    }
    
}
export default NavBar