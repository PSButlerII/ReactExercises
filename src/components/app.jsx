import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import DisplayName from './DisplayName/displayName';
import NameList from './NameList/nameList';
import SuperheroList from './SuperheroTable/superherottable';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      firstName:'Reggie',
      lastName: 'White',
      superheroeslist : [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
        }
    ]
     }
  }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <DisplayName/>
                <NameList/>
                <SuperheroList superheroeslist={this.state.superheroeslist}/>
                
            </div>

        );
    }
}
export default App;