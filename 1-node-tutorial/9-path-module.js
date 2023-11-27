const fs = require('fs')
 
const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');
console.log(first, second);
const fs = require('fs')

fs.writeFile('./content/written.txt', `Hi this is written using writeFileSync. I have also added data from first.txt and second.txt which is ${first} ${second}`)