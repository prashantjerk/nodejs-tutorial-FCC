const fs = require("fs");

console.log("START");
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
        console.log("Hi i want to see when I am consoled.")
      }
    );
  });
});
console.log("DONE");

// in this code what you see is
// DONE is consoled before the reading and writing task is finished
// which means that the code in this file behaves in asynchronous manner 
// i.e. task 2 can start eventhough task 1 is finished, unline synchronous code