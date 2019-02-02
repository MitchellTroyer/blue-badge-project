import React, {Component} from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import Home from '../homePage/home';
import Create from '../createCharacter/create';
import Logout from './logout/logout';
import './nav.css';
import Contact from '../contactMe/contactMe'

class Nav extends Component 
{ 
    render()
    {
        return(
        <div className="main-div">
            <div className="logout-container"> 
                <Logout className="logout" logout={this.props.logout}/>
                <div className="overlay">Logout</div>
            </div> 
            <div className="navbar">
            <ul className="navmenu">
                <li className="listmenu"><Link to="/home" className="text">Home</Link></li>
                <li className="listmenu"><Link to="/CreateCharacter" className="text">Create Character</Link></li>
                <li className="listmenu"><Link to="/ContactMe" className="text">Contact Me</Link></li>
            </ul>
            </div>
            <div className="navbar-route">
                <Switch>
                    <Route exact path="/home"><Home token = {this.props.token}/></Route>
                    <Route exact path="/CreateCharacter"><Create token = {this.props.token}/></Route>
                    <Route exact path="/ContactMe"><Contact/></Route>
                </Switch>
            </div>
        </div> 
    )}
} 
 
export default Nav;