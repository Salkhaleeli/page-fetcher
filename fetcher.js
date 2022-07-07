const filePath = process.argv[3]
const url = process.argv[2]
const request = require('request');
const fs = require('fs')

request(url, (error, response, body) =>{
  if (error) {
    console.log('Error: ', error)};
  // console.log('statusCode: ', response);
  fs.writeFile(filePath, body, ()=>{
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  })
})
