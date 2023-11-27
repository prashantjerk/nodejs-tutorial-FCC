const fs = require("fs");

for (let i = 0; i < 5000; i++) {
  fs.writeFileSync("./content/big.txt", `Hello World ${i}\n`, { flag: "a" });
}

const readStream = fs.createReadStream("./content/big.txt", "utf-8");
const writeStream = fs.createWriteStream('./content/streamwrite.txt');

readStream.on("data", (chunk) => {
  console.log("######### NEW CHUNK #########");
  console.log(chunk);

  writeStream.write("######### NEW CHUNK #########");
  writeStream.write(chunk);
});
