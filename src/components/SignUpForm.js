import { useState} from 'react'
import { Component } from 'react';
import { signUp } from '../utilities/users-service';
import '../../src/App.css'

//? SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)


export default class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    };

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value, error: ""})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state))
        try {
            const { name, email, password} = this.state;
            const formData = {name, email, password
              };

        // pass the formData to the Signup
        const user = await signUp(formData)
        this.props.setUser(user);
            // console.log(setUser);
        } catch {
            // if we have an error
            this.setState({error: "Sign up Failed - Try Again"})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>

                        <label> <br/> &nbsp;&nbsp; Name</label> &nbsp;&nbsp;
                        <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        required />
                        <br/>
                        <label> <br/> &nbsp;&nbsp; Email</label> &nbsp;&nbsp;
                        <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required />
                        <br/>
                        <label> <br/> &nbsp;&nbsp; Password</label> &nbsp;&nbsp;
                        <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required />
                        <br/>
                        <label> <br/> &nbsp;&nbsp; Confirm</label> &nbsp;&nbsp;
                        <input 
                        type="password" 
                        name="confirm" 
                        value={this.state.confirm} 
                        onChange={this.handleChange} 
                        required />
                        <br/>
                        <button type="submit" disabled={disable} >
                        &nbsp;
                        
                            SIGN UP
                        </button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }

    
}