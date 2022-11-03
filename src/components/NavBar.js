import { useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import * as userService from '../utilities/users-service';

const NavBar = ({user, setUser}) => {
  
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

    return (
        <nav>
            <NavLink to='/orders' className='Nav'>Order History</NavLink> &nbsp; | &nbsp;
            <NavLink to='/orders/new'>New Order</NavLink>
        
          <p style={myStyles.welcome}>Welcome, {user.name}!   <br/> <br/> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhtwz0tpdQFIM_3EvSKf7Fv6aQw0QrEWcZg&usqp=CAU' style={{ width: 55, height: 45}}/></p>
      
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