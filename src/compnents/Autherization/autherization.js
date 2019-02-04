import React, {Component} from 'react';

import './autherization.css';
import SignUp from './signUp/signUp';
import LogIn from './login/login';

class Auth extends Component
{
    state =
    {
        login: true,
        First_Name: '',
        Lirst_Name: '',
        Email: '',
        Password: ''
    }
    
    toggle = (event) =>
    {
        event.preventDefault();
        const login = this.state.login;
        this.setState(
            {
                login: !login,
                username: '', 
                Email: '',
                Password: ''//this will clear the inputs on click the toggle button
            })
    }
 
    viewModifier()
    {
        return(this.state.login) ? <LogIn tokenHandler = {this.props.tokenHandler}/> : <SignUp tokenHandler = {this.props.tokenHandler}/>;
    }

    render()
    {
        return(
                <div className="card">
                    {this.viewModifier()}
                    <button onClick={this.toggle} id="toggle">Toggle: Login/signUp</button><br/>
                </div>
    )}
}

export default Auth;