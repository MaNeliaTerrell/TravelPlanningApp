import {useState} from 'react'
import SignUpForm from "../components/SignUpForm"
import LogInForm from '../components/LogInForm'

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);
    return(
        <div>

            <h1>AuthPage</h1>
            {showSignUp ? <SignUpForm setUser={setUser} /> : <LogInForm setUser={setUser}/>}
           
           <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Log In" : "Sign Up"}</button>

        </div>
    )
}
export default AuthPage
