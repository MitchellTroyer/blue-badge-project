import React, { Component } from 'react';
import APIURL from '../../helper/envirnment'
import './create.css';

class Create extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            characterName: '',
            class: '',
            race: '',
            proficiency: '',
            background: '',
            level: '',
            health: '',
            armorclass: '',
            initiative: '',
            speed: '',
            hitdice: '',
            deathsaves: '',
            personalitytraits: '',
            bonds: '',
            ideals: '',
            flaws: '',
            strength: '',
            strengthAbilityScore: '',
            dexterity: '',
            dexerityAbilityScore: '',
            constitution: '',
            constitutionAbilityScore: '', 
            intelligence: '',
            intelligenceAbilityScore: '',
            wisdom: '',
            wisdomAbilityScore: '',
            charisma: '',
            charismaAbilityScore: '',
            inventory: '',
            backstory: ''
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

        fetch(`${APIURL}/CharacterMain/CreateCharacter`, 
                    {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                charactersheet: 
                                {
                                    characterName: this.state.characterName,
                                    class: this.state.class,
                                    race: this.state.race,
                                    proficiency: this.state.proficiency,
                                    background: this.state.background,        
                                    level: this.state.level,
                                    health: this.state.health,
                                    armorclass: this.state.armorclass,
                                    initiative: this.state.initiative,
                                    speed: this.state.speed,
                                    hitdice: this.state.hitdice,
                                    deathsaves: this.state.deathsaves,
                                    personalitytraits: this.state.personalitytraits,
                                    bonds: this.state.bonds,
                                    ideals: this.state.ideals,
                                    flaws: this.state.flaws,
                                    strength: this.state.strength,
                                    strengthAbilityScore: this.state.strengthAbilityScore,
                                    dexterity: this.state.dexterity,
                                    dexterityAbilityScore: this.state.dexterityAbilityScore,
                                    constitution: this.state.constitution,
                                    constitutionAbilityScore: this.state.constitutionAbilityScore,
                                    intelligence: this.state.intelligence,
                                    intelligenceAbilityScore: this.state.intelligenceAbilityScore,
                                    wisdom: this.state.wisdom,
                                    wisdomAbilityScore: this.state.wisdomAbilityScore,
                                    charisma: this.state.charisma,
                                    charismaAbilityScore: this.state.charismaAbilityScore,
                                    inventory: this.state.inventory,
                                    backstory: this.state.backstory
                                }
                            }),
                            headers:
                            {'Content-Type' : 'application/json',
                            "Authorization" : this.props.token},
                            })
                    .then(response => response.json(), alert('character created'))
                    .catch(err => console.log(err))
                    
    }


    render()
    {
        return(
        <div>
            <form className="create">
            <button className="save" onClick = {this.handleSubmit}>Save</button>
                <table className="Table">
                <tbody>
                    <tr className="tableHeader">
                        <th>Character Name:</th>
                        <td><input className="char-level" name="characterName" onChange={this.handleChange}/></td>
                        <th>Class:</th>
                        <td><input className="char-level" name="class" onChange={this.handleChange}/></td>
                        <th>Race:</th>
                        <td><input className="char-level" name="race" onChange={this.handleChange}/></td>
                    </tr>
                    <tr className="background">
                        <th>Proficiency Bonus:</th>
                        <td><input className="char-level" name="proficiency" onChange={this.handleChange}/></td>
                        <th>Background:</th>
                        <td><input className="char-level" name="background" onChange={this.handleChange}/></td>
                        <th>Level:</th>
                        <td><input className="char-level" name="level" onChange={this.handleChange}/></td>
                    </tr>
                    <tr className="ac">
                        <th>Armor Class:</th>
                        <td><input className="skillpoint" name="armorclass" onChange={this.handleChange}/></td>
                        <th>Initiative:</th>
                        <td><input className="skillpoint" name="initiative" onChange={this.handleChange}/></td>
                        <th>Speed:</th>
                        <td><input className="skillpoint" name="speed" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                    </tr>
                    <tr className="stats">
                        <td className="blank"></td>
                        <th>Health Points</th>
                        <th>Hit Dice</th>
                        <th>Death Saves</th>
                        <th className="trait">Personality traits</th>
                        <th className="trait">Bonds</th>
                    </tr>
                    <tr>
                        <td className="blank"></td>
                        <td><input className="skillpoint" name="health" onChange={this.handleChange}/></td>
                        <td><input className="skillpoint" name="hitdice" onChange={this.handleChange}/></td>
                        <td><input className="skillpoint" name="deathsaves" onChange={this.handleChange}/></td>
                        <td><textarea className="skillpoints" rows="1" name="personalitytraits" onChange={this.handleChange}></textarea></td>
                        <td><textarea className="skillpoints" rows="1" name="bonds" onChange={this.handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td className="blank"></td>

                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="strength" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="strengthAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Dexerity</th>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <th className="trait">Ideals</th>
                        <th className="trait">Flaws</th>
                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="dexterity" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="dexterityAbilityScore" onChange={this.handleChange}/></td>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td><textarea className="skillpoints" rows="1" name="ideals" onChange={this.handleChange}></textarea></td>
                        <td><textarea className="skillpoints" rows="1" name="flaws" onChange={this.handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <th>Constitution</th>
                        <td className="blank"></td> 
                        <td className="blank"></td>
                        <td className="blank"></td>
                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="constitution" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="constitutionAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Intellect</th>
                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="intelligence" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="intelligenceAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Wisdom</th>
                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="wisdom" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="wisdomAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Charisma</th>
                    </tr>
                    <tr>
                        <td><input className="skillpoint" name="charisma" onChange={this.handleChange}/></td>
                        <td className="AB"><input className="skillpointAB" name="charismaAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                </tbody>
                </table>
            </form>
                <div className="createInventory">
                <h2>Inventory</h2>
                    <textarea className="InventoryText" rows="7" name="inventory" onChange={this.handleChange}></textarea>
                </div>
                <div className="createBackstory">
                <h2>Backstory</h2>
                    <textarea className="InventoryText" rows="7" name="backstory" onChange={this.handleChange}></textarea>
                </div>
            </div>
        )
    }
}

export default Create;