const functions = require('./index.js');

const routeTest = 'C:\\Users\\Laboratoria\\LIM018-md-links\\ensayo.md'

describe('pathStat', () => {
    it('Muestra la existencia de la ruta', () => {
        expect(functions.pathStat()).toBe();
    })
})


describe('getAbsolutePath', () => {
    it('Muestra la ruta resuelta', () => {
        expect(functions.getAbsolutePath('ensayo.md')).toBe(routeTest);
    })
})