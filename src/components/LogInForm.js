import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import '../../src/App.css'

const LogInForm = ({ setUser }) => {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
    const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
const user = await usersService.logIn(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>

    <div className="form-container" onSubmit={handleSubmit}>
  
      <form autoComplete="off" >
        <label> <br/> &nbsp;&nbsp; Email </label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <br/>
        <label> <br/> &nbsp;&nbsp; Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        &nbsp;&nbsp; <br/>
        <br/>
        <button type="submit">LOG IN</button>
      </form>
     
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}
export default LogInForm