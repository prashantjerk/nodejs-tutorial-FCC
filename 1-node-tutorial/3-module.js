// Modules
const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

sayHi("Random Guy");
sayHi(names.Peter);
sayHi(names.Parker);
sayHi(names.Prashant);
 
require('./7-mind-grenade')

sayHi(data.person.name);
sayHi(data.array[0])