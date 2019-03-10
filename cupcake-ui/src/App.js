import React, { Component } from 'react';
import './shared/styles/App.css';

import { diamondBase } from './shared/constants/constants';

import Shiny from './components/Shiny';
import DiamondTransfer from './components/DiamondTransfer';

class App extends Component {
  state = {
    diamond: diamondBase,
    left: {
      account: '"b658daae-6d9b-48d7-9ac5-32bf978d7a03', // FIXME
      diamonds: [],
    },
    right: {
      account: 'ca643418-a51c-4e03-82eb-bc0bf68bf2d1', // FIXME
      diamonds: [],
    },
  };

  onConfirm = (diamond) => {
    console.log('Baking diamond', diamond);
  };

  onTransfer = (fromAccount, toAccount, diamond) => {
    console.log("Transfer diamond", fromAccount, toAccount, diamond);
  };

  onSelected = (diamond) => {
    console.log('Selected', diamond);

    this.setState({
      diamond,
    });
  };

  render() {
    const { left, right, diamond } = this.state;

    return (
      <div className="container">
        <h1>Diamonds</h1>

        <DiamondTransfer
          left={left}
          right={right}
          onTransfer={this.onTransfer}
          onDiamondSelect={this.onSelected}
        />

        <Shiny diamond={diamond} onConfirm={this.onConfirm} onChange={this.onSelected} />
      </div>
    );
  }
}

export default App;
