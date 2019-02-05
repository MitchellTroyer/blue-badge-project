import React, {Component} from 'react';
import './login.css';
import APIURL from '../../../helper/envirnment'

class logIn extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            Username: '',
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
        event.preventDefault();
        if(!document.getElementById("username").value || !document.getElementById("password").value)
        {
            alert('username &/or password not filled in');
        }else  
        {
            fetch(`${APIURL}/user/signIn`,
            {
                method: 'POST',
                    body: JSON.stringify(
                        {user:
                            {
                            username: this.state.Username,
                            password: this.state.Password
                        }}),
                        headers:
                        {'Content-Type' : 'application/Json'}
            }) 
            .then(response => response.json())
            .then(data => this.props.tokenHandler(data.sessionToken))
        }
    }

    render()
    {
        return(
            <form onSubmit = {this.handleSubmit}>
            <h1>Login</h1>

                <label htmlFor="username">Username:</label><br/>
                <input name="Username" type="text" id="username" className="in" onChange={this.handleChange} placeholder="Username"/><br/>

                <label htmlFor="password">Password</label><br/>
                <input name="Password" type="password" id="password" className="in" onChange={this.handleChange} placeholder="Password"/><br/>

                <button type="submit" className="button" id="login">Login</button>
            </form>
        )
    }
}

export default logIn;