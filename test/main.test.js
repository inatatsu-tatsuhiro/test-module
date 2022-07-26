const { expect } = require('chai');
const add = require('../src/index.js');

describe('add test', () => {
  it('add', () => {
    const response = add(1,2);
    expect(response).to.equal(3);
  });

});