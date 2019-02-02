import React, { Component } from 'react';
import './App.css';
import Auth from './compnents/Autherization/autherization';
import Nav from './compnents/Nav/nav';
import {BrowserRouter as Router,} from 'react-router-dom';
import Footer from './compnents/footer/footer';

class App extends Component 
{
  state =
  {
    sessionToken: ''
  }

  componentWillMount()
  {
    const token = localStorage.getItem("token");
    if(token && !this.state.sessionToken)
    {
      this.setState({sessionToken: token})
    }
  }

  removeSessionToken = () =>
  {
    this.setState({sessionToken: ''})//sets token to undefined, removes it
  }

  storeSessionToken = (token) =>
  {
    this.setState({sessionToken: token})
  }

  viewModifier()
  {
    return(this.state.sessionToken) ? <Nav token = {this.state.sessionToken} logout={this.removeSessionToken}/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  render() 
  {
    return (
    <div className="App">
        <Router>{this.viewModifier()}</Router>
        <div className="footer">
          <Footer/>
        </div>
     </div>
    )
  }
}

export default App;
