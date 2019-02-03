import React from 'react';

const yourCharacters = (props) =>
{
    return(
    <tr>
        <td>{props.character.characterName}</td>
        <td><button>Open</button></td>
    </tr>
    )
}

export default yourCharacters;