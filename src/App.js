import React, { Component } from 'react';
import SignIn from './SignIn';
import Header from './Components/Header';
import CharactersContainer from './Components/CharactersContainer';
import { Route, Link } from 'react-router-dom';
import * as actions from '../redux/actions';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Route exact path="/" render={()=>(
          <div>
            <SignIn {...this.props}/>
          </div>
        )}/>
        <Route path="/CharacterSelect" render={() => (
          <CharactersContainer />
        )} /> 

      </div>
    );
  }
}

export default App;
