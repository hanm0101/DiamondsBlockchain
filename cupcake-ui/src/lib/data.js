const sampleAccount = {
  type: 'account',
  data: {
    attributes: {
      'account-type': 'individual',
      'admin-email': 'peter.wiggen@example.com',
      contact: {
        email: 'LindseyMiz@gmail.com',
        phone: '555-555-5323',
        'last-name': 'Miz',
        'first-name': 'Lindsey',
        address: {
          city: 'Toronto',
          'postal-code': 'N4N2L1',
          'province-region': 'Ontario',
          'street-address-1': '925 Madison Avenue',
          country: 'CA',
        },
      },
    },
  },
};

const sampleCupcake = {
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
  sampleCupcake,
};
