const { error } = require("console");

const fs = new require("fs");

fs.writeFile("a.txt", "hello World", (err) => {
  console.log(err);
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}

