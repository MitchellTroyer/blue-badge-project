import React from 'react';

const yourCharacters = (props) =>
{
    return(
    <tr>
        <td>{props.character.characterName}</td>
    </tr>
    )
}

export default yourCharacters;