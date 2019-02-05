import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import APIURL from '../../../../helper/envirnment';

class CharModals extends Component {
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      modal: false,
            characterName: this.props.character.characterName,
            class: this.props.character.class,
            race: this.props.character.race,
            proficiency: this.props.character.proficiency,
            background: this.props.character.class,
            level: this.props.character.level,
            health: this.props.character.health,
            armorclass: this.props.character.armorclass,
            initiative: this.props.character.initiative,
            speed: this.props.character.speed,
            hitdice: this.props.character.hitdice,
            deathsaves: this.props.character.deathsaves,
            personalitytraits: this.props.character.personalitytraits,
            bonds: this.props.character.bonds,
            ideals: this.props.character.ideals,
            flaws: this.props.character.flaws,
            strength: this.props.character.strength,
            strengthAbilityScore: this.props.character.strengthAbilityScore,
            dexterity: this.props.character.dexterity,
            dexterityAbilityScore: this.props.character.dexterityAbilityScore,
            constitution: this.props.character.constitution,
            constitutionAbilityScore: this.props.character.constitutionAbilityScore, 
            intelligence: this.props.character.intelligence,
            intelligenceAbilityScore: this.props.character.intelligenceAbilityScore,
            wisdom: this.props.character.wisdom,
            wisdomAbilityScore: this.props.character.wisdomAbilityScore,
            charisma: this.props.character.charisma,
            charismaAbilityScore: this.props.character.charismaAbilityScore,
            inventory: this.props.character.inventory,
            backstory: this.props.character.backstory
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() 
  {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (event) => 
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

  handleDelete = (event) =>
    {
        event.preventDefault()
        fetch(`${APIURL}/CharacterMain/delete/${this.props.character.id}`,
        {
            method: 'DELETE',
            headers:
            {'Content-Type' : 'application/json',
            'Authorization' : this.props.token},
        })
    }

    handleUpdate = (event) =>
    {
        event.preventDefault()
        fetch(`${APIURL}/CharacterMain/update/${this.props.character.id}`,
        {
            method: 'PUT',
            headers: new Headers(
                {'Content-Type': 'application/json',
                'Authorization': this.props.token}
                ),
            body: JSON.stringify(
                { 
                        characterName: this.state.characterName,
                        class: this.state.class,
                        race: this.state.race,
                        proficiency: this.state.proficiency,
                        background: this.state.class,
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
                }),
        })
        
    }

  render() 
  {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <div>
            <form className="create_modal">
            <button className="save" onClick = {this.handleUpdate}>Update Character</button>
            <button className="save" onClick = {this.handleDelete}>Delete</button>
                <table className="Table">
                <tbody>
                    <tr className="tableHeader">
                        <th>Character Name:</th>
                        <td><input value={this.state.characterName} className="char-level" name="characterName" onChange={this.handleChange}/></td>
                        <th>Class:</th>
                        <td><input value={this.state.class} className="char-level" name="class" onChange={this.handleChange}/></td>
                        <th>Race:</th>
                        <td><input value={this.state.race} className="char-level" name="race" onChange={this.handleChange}/></td>
                    </tr>
                    <tr className="background">
                        <th>Proficiency Bonus:</th>
                        <td><input value={this.state.proficiency} className="char-level" name="proficiency" onChange={this.handleChange}/></td>
                        <th>Background:</th>
                        <td><input value={this.state.background} className="char-level" name="background" onChange={this.handleChange}/></td>
                        <th>Level:</th>
                        <td><input value={this.state.level} className="char-level" name="level" onChange={this.handleChange}/></td>
                    </tr>
                    <tr className="ac">
                        <th>Armor Class:</th>
                        <td><input value={this.state.armorclass} className="skillpoint" name="armorclass" onChange={this.handleChange}/></td>
                        <th>Initiative:</th>
                        <td><input value={this.state.initiative} className="skillpoint" name="initiative" onChange={this.handleChange}/></td>
                        <th>Speed:</th>
                        <td><input value={this.state.speed} className="skillpoint" name="speed" onChange={this.handleChange}/></td>
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
                        <td><input value={this.state.health} className="skillpoint" name="health" onChange={this.handleChange}/></td>
                        <td><input value={this.state.hitdice} className="skillpoint" name="hitdice" onChange={this.handleChange}/></td>
                        <td><input value={this.state.deathsaves} className="skillpoint" name="deathsaves" onChange={this.handleChange}/></td>
                        <td><textarea value={this.state.personalitytraits} className="skillpoints" rows="1" name="personalitytraits" onChange={this.handleChange}></textarea></td>
                        <td><textarea value={this.state.bonds} className="skillpoints" rows="1" name="bonds" onChange={this.handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td className="blank"></td>

                    </tr>
                    <tr>
                        <td><input value={this.state.strength} className="skillpoint" name="strength" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.strengthAbilityScore} className="skillpointAB" name="strengthAbilityScore" onChange={this.handleChange}/></td>
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
                        <td><input value={this.state.dexterity} className="skillpoint" name="dexterity" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.dexterityAbilityScore} className="skillpointAB" name="dexterityAbilityScore" onChange={this.handleChange}/></td>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td><textarea value={this.state.ideals} className="skillpoints" rows="1" name="ideals" onChange={this.handleChange}></textarea></td>
                        <td><textarea value={this.state.flaws} className="skillpoints" rows="1" name="flaws" onChange={this.handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <th>Constitution</th>
                        <td className="blank"></td> 
                        <td className="blank"></td>
                        <td className="blank"></td>
                    </tr>
                    <tr>
                        <td><input value={this.state.constitution} className="skillpoint" name="constitution" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.constitutionAbilityScore} className="skillpointAB" name="constitutionAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Intellect</th>
                    </tr>
                    <tr>
                        <td><input value={this.state.intelligence} className="skillpoint" name="intelligence" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.intelligenceAbilityScore} className="skillpointAB" name="intelligenceAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Wisdom</th>
                    </tr>
                    <tr>
                        <td><input value={this.state.wisdom} className="skillpoint" name="wisdom" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.wisdomAbilityScore} className="skillpointAB" name="wisdomAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <th>Charisma</th>
                    </tr>
                    <tr>
                        <td><input value={this.state.charisma} className="skillpoint" name="charisma" onChange={this.handleChange}/></td>
                        <td className="AB"><input value={this.state.charismaAbilityScore} className="skillpointAB" name="charismaAbilityScore" onChange={this.handleChange}/></td>
                    </tr>
                </tbody>
                </table>
            </form>
                <div className="createInventory_modal">
                <h2>Inventory</h2>
                    <textarea value={this.state.inventory} className="InventoryText" rows="7" name="inventory" onChange={this.handleChange}></textarea>
                </div>
                <div className="createBackstory_modal">
                <h2>Backstory</h2>
                    <textarea value={this.state.backstory} className="InventoryText" rows="7" name="backstory" onChange={this.handleChange}></textarea>
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CharModals;