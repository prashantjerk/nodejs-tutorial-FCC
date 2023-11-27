const path = require('path')

console.log(path.sep);  // this consoles the separator which is usually '/' or '\'

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);  

const base = path.basename(filePath);
console.log(base);

console.log(path.dirname(filePath))
console.log(path.extname(filePath))
console.log(path.normalize(filePath))
console.log(path.resolve(__dirname, 'subfolder', 'text.txt'));
