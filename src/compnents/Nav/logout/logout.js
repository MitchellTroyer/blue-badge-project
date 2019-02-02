import React from 'react';

import LogoutPic from '../../assets/nat_1.jpg';
import './logout.css';

const Logout = (props) =>
{
    return(
        <img className="Logout" alt="Logout" src={LogoutPic} onClick={props.logout} />
    )
}

export default Logout;