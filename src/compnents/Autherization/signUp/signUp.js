import React, {Component} from "react";
import APIURL from '../../../helper/envirnment'
import './signUp.css';

class signup extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            Username: '',
            Email: '',
            Password: ''
        }
    }


    handleChange = (event) => 
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }


    handleSubmit = (event) =>
    {
        if(document.getElementById("password").value === document.getElementById("verifypassword").value)
        {
            if(!document.getElementById("username").value || !document.getElementById("email").value || !document.getElementById("password").value || !document.getElementById("verifypassword").value)
            {
                alert('form incomplete, please enter all information')
            }else
            {
                fetch(`${APIURL}/user/CreateUser`, 
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            user: 
                            {
                                username: this.state.Username,
                                email: this.state.Email,
                                password: this.state.Password
                            } 
                        }),
                        headers:
                        {'Content-Type' : 'application/json'},
                })
                .then(response => response.json())
                .then(data => this.props.tokenHandler(data.sessionToken))
                .catch(err => console.log(err))
                alert('User Created')
            }
        }else
        {
            alert('your passwords do not match')
        }
        event.preventDefault();
    }

    render()
    {
        
            return(
                <form onSubmit = {this.handleSubmit}>
                <h1>SignUp</h1><br/>

                    <label htmlFor="username">Username:</label><br/>
                    <input  name="Username" type="text" id="username" onChange={this.handleChange} placeholder="Username"/><br/>

                    <label htmlFor="email">Email:</label><br/>
                    <input name="Email" type="text" id="email" className="input" onChange={this.handleChange} placeholder="Email"/><br/>

                    <label htmlFor="password">Password</label><br/>
                    <input name="Password" type="password" id="password" className="input" onChange={this.handleChange} placeholder="Password"/><br/>

                    <label htmlFor="verifypassword">Password</label><br/>
                    <input type="password" id="verifypassword" className="input" onChange={this.handleChange} placeholder="verify Password"/><br/>

                    <button type="submit" className="submit" id="signUp">SignUp</button>
                </form>
            ) 
    }
}



export default signup;