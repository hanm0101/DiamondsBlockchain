const sampleAccount = {
  type: 'account',
  data: {
    attributes: {
      'account-type': 'individual',
      'admin-email': 'MyaliM@gmail.com',
      contact: {
        email: 'MyaliM@gmail.com',
        phone: '555-555-5323',
        'last-name': 'M',
        'first-name': 'Myali',
        address: {
          city: 'Washington',
          'postal-code': 'N4N3L1',
          'province-region': 'Washington',
          'street-address-1': '123 Madison Avenue',
          country: 'WA',
        },
      },
    },
  },
};

const sampleDiamond = {
  flavour: 'chocolate',
  icing: 'chocolate',
  sprinkles: {
    quantity: 41,
    type: 'rainbow',
  },
  candle: {
    colour: 'blue',
    ignited: false,
  },
};

module.exports = {
  sampleAccount,
  sampleDiamond,
};
