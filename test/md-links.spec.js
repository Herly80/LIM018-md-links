const mdLinks = require('../md-Links.js');


describe('mdLinks', () => {

  it('la longitudcls del array', (done) => {
    const promise = mdLinks();
    promise.then((arr) => {
      expect(arr.length).toBe(1);
      done();
    })
  });

});


