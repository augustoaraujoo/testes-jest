const array = require('../../src/array');

test('a lista de compras contém papel toalha ', () => {
    //Você pode verificar se um array ou iterável contém um item específico usando toContain
    expect(array).toContain('papel toalha');
    //Received set:Set {"fraldas", "kleenex", "sacos de lixo", "papel toalha", "leite"}
    expect(new Set(array)).toContain('leite');

})