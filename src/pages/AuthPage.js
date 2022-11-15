import { useState } from 'react'
import SignUpForm from "../components/SignUpForm"
import LogInForm from '../components/LogInForm'
import '../../src/App.css';
import '../../src/index.css'



const AuthPage = ({ setUser }) => {
    const [showSignUp, setShowSignUp] = useState(true);
 

    return (
        <body>

            <div>

                
                {showSignUp ? <SignUpForm setUser={setUser} /> : <LogInForm setUser={setUser} />}

                <button style={{fontSize: '10px', backgroundColor: 'lightblue'}}
                onClick={() => setShowSignUp(!showSignUp)} >{showSignUp ? "Log In" : "Sign Up"}</button>

            </div>
            <>



            </>
        </body>


    )
}
export default AuthPage
