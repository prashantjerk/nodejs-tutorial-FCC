const fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, firstRes) => {
  if (err)
    console.error("There has been an error", err);

  fs.readFile("./content/second.txt", "utf8", (err, secondRes) => {
    if (err) 
        console.error(err);
    
    console.log(firstRes, secondRes);

    fs.writeFile("./content/written.txt",
      `Hi this is written using writeFileSync. I have also added data from first.txt and second.txt which is ${firstRes} ${secondRes}`,
      (err, res) => {
        if (err)
            console.error("Errors were detected while writing.");
      }
    );
  });
});
