const { error } = require("console");

const fs = new require('fs');

fs.readFile('a.txt', 'utf8', (error, data)=>{
  console.log(data);
})

for(let i = 0; i < 1000; i++){
  console.log(i)
}