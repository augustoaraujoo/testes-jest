const sum = require('../../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('atribuição de objeto', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    // Se você quer checar o valor de um objeto, use toEqual
});


//  toMatch = /regex/
//  to be =valor exato
//  toEqual valor do objeto
//  toContain => valor dentro do array 