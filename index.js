const {billboard} = require('./billboard');

console.log('hello git')
billboard('hello there')


const multi = (multiplier,...numbers)=> numbers.map(n=>n*multiplier);

const sum = (...numbers)=> numbers.reduce((t,c)=>t+c,0);
module.exports = {sum,multi}