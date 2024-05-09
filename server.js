const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http');

server = http.createServer((req, res) => {

    let reqBody = '';

    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        console.log(reqBody);
    });

});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
