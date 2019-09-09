console.log('hello git')

const multi = (multiplier,...numbers)=> numbers.map(n=>n*multiplier);

const sum = (...numbers)=> numbers.reduce((t,c)=>t+c,0);
module.exports = {sum}