const string = require('../../src/string');

test('string termina com 3 ?', () => {
    expect(string).toMatch(/3$/gi)
    //Você pode verificar strings contra expressões regulares com toMatch
})
