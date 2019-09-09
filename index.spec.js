//some tests here...
const {sum} = require('./index');

test('sum 2 numbers',()=>{
    const result = sum(2,3);
    expect(result).toBe(5)
})
