import React, { Component } from 'react';
import '../shared/styles/DiamondTransfer.css';
import 'request-promise';

import AccountPanel from './AccountPanel';

class DiamondTransfer extends Component {
  state = {
    leftAccount: this.props.left && this.props.left.account,
    rightAccount: this.props.right && this.props.right.account,
    selectedAccount: -1,
    selectedDiamond: null,
    left: this.props.left,
    right: this.props.right,
  };

  onLoad = (side, account) => {
    const that = this;
    // FIXME
  };

  onDiamondSelect = (account, diamond) => {
    alert(JSON.stringify(diamond));

    this.setState({
      selectedAccount: account,
      selectedDiamond: diamond,
    });

     if(this.props.onDiamondSelect) { this.props.onDiamondSelect(diamond); }
  };

  onTransfer = (fromAccount, toAccount, diamond) => {
    const { id } = diamond;
    const { onTransfer } = this.props;
    console.log('tx');
    console.log(fromAccount, toAccount, diamond);
    if (fromAccount && toAccount && diamond) {
      // FIXME
      // base
      if (onTransfer) {
        onTransfer(fromAccount, toAccount, diamond);
      }
    }
  };

  render() {
    const {
      left, right, selectedAccount, selectedDiamond, leftAccount, rightAccount,
    } = this.state;
    const leftToRight = selectedAccount === leftAccount;
    const fromAccount = leftToRight ? leftAccount : rightAccount;
    const toAccount = leftToRight ? rightAccount : leftAccount;
    return (
      <div className="row panel">
        <div className="col-md-5">
          <AccountPanel
            account={left.account}
            diamonds={left.diamonds}
            selected={selectedDiamond}
            onLoad={this.onLoad.bind(this, 'left')}
            onSelect={this.onDiamondSelect.bind(this, left.account)}
          />
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-secondary mb-2"
            onClick={this.onTransfer.bind(this, fromAccount, toAccount, selectedDiamond)}
          >
            {!leftToRight ? '<-' : null} Transfer {leftToRight ? '->' : null}
          </button>
        </div>
        <div className="col-md-5">
          <AccountPanel
            account={right.account}
            diamonds={right.diamonds}
            selected={selectedDiamond}
            onLoad={this.onLoad.bind(this, 'right')}
            onSelect={this.onDiamondSelect.bind(this, right.account)}
          />
        </div>
      </div>
    );
  }
}

export default DiamondTransfer;
