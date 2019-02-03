import React, { Component } from 'react';
import './home.css';
import APIURL from '../../helper/envirnment';
import Characters from './yourCharacters/ycharacters';


class Home extends Component 
{
    constructor(props)
    {
        super(props)
        this.state =
      {
          characters: []
      }
    }


  componentWillMount()
  {
    fetch(`${APIURL}/CharacterMain/allSheets`, 
      {
        method: 'GET',
        headers:
        {'Content-Type' : 'application/json',
        "Authorization" : this.props.token},
      })
      .then(response => console.log(response.json()))
      //.then(json => this.setState({characters: json}))
      .catch(err => console.log(err))
  }


    render() 
  {
    let characterRows = this.state.characters.map(char =>
      {
          return(
          <Characters character={char}/>
          )
      })
    return(
    <div className="home">
      <table className="mainTable">
      <tbody>
       <tr className="tableHeader">
         <th>Your Characters</th>
       </tr>
       <tr>
         {characterRows}
       </tr>
      </tbody>
      </table>
     </div>
    )
  }

}

export default Home;