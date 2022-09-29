const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);

const server = args[0]; //http://www.example.edu/
const filePath = args[1]; //./index.html

request(server, (error, response, body) => {
  fs.writeFile(filePath, body, (err) => {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;

    return console.log(
      `Downloaded and saved ${fileSizeInBytes} to ${filePath}`
    );
  });
});
