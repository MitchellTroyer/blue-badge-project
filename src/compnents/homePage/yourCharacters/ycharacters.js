import React from 'react';
import Modal from './modal/modal';

const yourCharacters = (props) =>
{
    

    return(
        <tr>
            <td className="charName">{props.character.characterName}</td>
            <Modal token={props.token} character={props.character}/>
        </tr>
    )

    

}

export default yourCharacters;