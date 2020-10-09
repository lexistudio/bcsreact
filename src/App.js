import React, { Component } from 'react';
import CardWrao from './components/card/cardWrap'
import InfoWrap from './components/info/infoWrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoWrap />
        <CardWrao />
      </div>
    )
  }
}

export default App;
