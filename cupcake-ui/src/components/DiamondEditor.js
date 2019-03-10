import React, { Component } from 'react';

import createFile from '../lib/helpers/files/createFile';

function DropDown({
  label, items, value, onChange,
}) {
  if (!onChange) {
    onChange = (e) => {};
  }

  return (
    <div className="form-group col-md-4">
      <label>{label}</label>
      <select className="form-control" value={value} onChange={onChange}>
        {Object.entries(items).map(c => (
          <option key={c[0]} value={c[0]}>
            {c[0]}
          </option>
        ))}
      </select>
    </div>
  );
}

//Object used for incoming props and outgoing changes on Confirm
const diamond ={
  diamond: {
    diamondColour: "E",
    shapeType: "Round",
    clarityValue: 1,
    carratQuantity: 20,
    fluorescenceQuality: "Faint",
    origin: "USA",
  }
}

 // onConfirm(diamond); // Fired when the Confirm button is clicked
 // onChange(diamond); //Fired when anything is changed

class DiamondEditor extends Component {
  onChange = (fn) => {
    const { diamond, onChange } = this.props;
    const diamondJSON = JSON.parse(JSON.stringify(diamond)); // Hack for deep copy

    return (evt) => {
      const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

      fn(diamondJSON, value); // Update diamond

      if (onChange) {
        onChange(diamondJSON);
      }
    };
  };

  onConfirm = (evt) => {
    const { diamond, onConfirm } = this.props;
    evt.preventDefault();

    console.log('making diamond..' ,  createFile(diamond, ));

    createFile(diamond, "b658daae-6d9b-48d7-9ac5-32bf978d7a03", "diamond").then(data => console.log(data));

    if (onConfirm) {
      onConfirm(diamond);
    }
  };

  render() {
    const {
      diamond, diamondColours, shapeTypes, carratQuantity, fluorescenceQuality, clarityValue
      //diamond, flavourColours, icingColours, clarityColours, candleColours,
    } = this.props;

    const {
      origin, colour, shape, carrat, clarity, fluorescence
      //address, flavour, icing, clarity, candle, temperature,
    } = diamond;

    return (
      <form>
      <div className="info">
        <div className="form-row">
          <DropDown
            label="Colour"
            items={diamondColours}
            value={colour}
            onChange={this.onChange((c, v) => (c.colour = v))}
          />

        </div>
        <div className="form-row">
        <DropDown
          label="Shape"
          items={shapeTypes}
          value={shape}
          onChange={this.onChange((c, v) => (c.shape = v))}
        />
        </div>
        {/* Sprinkles */}
        <div className="form-row">
          <DropDown
            label="Carrat"
            items={carratQuantity}
            value={carrat}
            onChange={this.onChange((c, v) => (c.carrat = v))}
          />
          </div>

          <label>Clarity <br/>
          <input
          label = "Clarity"
              type="string"
              className="form-control"
              value={clarity}
              onChange={this.onChange((c, v) => (c.clarity = v))}
            /></label>


        {/* Candles */}
        <div className="form-row">
        <label>Fluorescence <br/>
        <input
          label ="Fluorescence"
          type="string"
          className="form-control"
          value={fluorescence}
          onChange={this.onChange((c, v) => (c.fluorescence = v))}
          /></label>
<         /div>


          <div className="form-row">
            <label>Origin <br/>
            <input
              type="string"
              className="form-control"
              value={origin}
              onChange={this.onChange((c, v) => (c.origin = v))}
            /></label>
          </div>


        <button type="submit" className="btn btn-primary" onClick={this.onConfirm}>
          Confirm
        </button>
        </div>
      </form>
    );
  }
}

export default DiamondEditor;
