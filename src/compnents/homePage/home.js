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
      .then(response => response.json())
      .then(json => {console.log(json); this.setState({characters: json})})
      .catch(err => console.log(err))
  }

    render() 
  {
    let characterRows = this.state.characters.map(char =>
      {
          return(
          <Characters token={this.props.token} key={char.id} character={char}/>
          )
      })
    return(
    <div className="home">
      <table className="mainTable">
      <tbody>
       <tr className="tableHeader">
         <th>Your Characters</th>
       </tr>
       <tr className="characters">
         {characterRows}
       </tr>
      </tbody>
      </table>
     </div>
    )
  }

}

export default Home;