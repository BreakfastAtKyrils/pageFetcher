const request = require('request');
const fs = require('fs');

var args = process.argv.slice(2);
url = args[0];
fileHandle = "body.txt"

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof(body))
  //const parseBody = JSON.parse(body)
  fs.writeFile(fileHandle, body, 'utf-8', function (err) {
    if (err) return console.log(err)
  })
});


