import React, { Component } from 'react';

import '../shared/styles/App.css';

import Diamond from './Diamond';
import DiamondEditor from './DiamondEditor';

import {
  diamondColours,
  shapeTypes,
  carratQuantity,
  fluorescenceQuality,
  //candleColours,
} from '../shared/constants/constants';

class Shiny extends Component {
  onConfirm = (diamond) => {
    const { onConfirm } = this.props;
    if (onConfirm) {
      onConfirm(diamond);
    }
  };

  onChange = (diamond) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(diamond);
    }
  };

  render() {
    const { diamond } = this.props;

    if (!diamond) {
      return null;
    }

  const {
      colour, shape, carrat, clarity, fluorescence
      //flavour, icing, clarity, candle, temperature,
    } = diamond;

    return (
      <div className="row panel">
        <div className="col-md-8">
          <DiamondEditor
            diamondColours={diamondColours}
            shapeTypes={shapeTypes}
            carratQuantity={carratQuantity}
          //  fluorescenceQuality={fluorescence}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
            diamond={diamond}
          />
        </div>
        <div className="col-md-4">
          {/*
            Due to ID's being used in the SVG you can only include one Diamond at a time or they will overwrite eachothers
            styles.
            */}
          <Diamond
            colour={diamondColours[colour]}
            shape={shapeTypes[shape]}
            carrat={carratQuantity[carrat]}
            //fluorescenceQuality={fluorescenceQuality[fluorescence]}
            clarity={clarity.quantity}
            //candleColour={candleColours[candle.colour]}
            //candleIgnited={candle.ignited}
          />
        </div>
      </div>
    );
  }
}

export default Shiny;
