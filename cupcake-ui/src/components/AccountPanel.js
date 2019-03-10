import classnames from 'classnames';
import React from 'react';

import '../shared/styles/DiamondTransfer.css';

import AccountSelector from './AccountSelector';

const AccountPanel = ({
  account, diamonds, onSelect, onLoad, selected,
}) => (
  <div>
    <AccountSelector account={account} onLoad={onLoad} />
    <div>
      {diamonds.map((c) => {
        console.log(c);
        const className = classnames('diamond-row', {
          // "diamond-row-selected": c.id == (selected && selected.id),
        });

        return (
          <div className={className} key={c.id} onClick={evt => onSelect(c)}>
            {c.id}
          </div>
        );
      })}
    </div>
  </div>
);

export default AccountPanel;
