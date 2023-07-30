const { readFile, readFileSync } = require("fs");

const text = readFileSync('./myFile.txt', 'utf8');

console.log(text);

const express = require('express');

const app = express();


app.get('/', (request, response)=> {
    readFile('./home.html', 'utf8', (error, html) => {
        if(error) {
            response.status(500).send('Sorry, an Erorr Occured during Request');
        }
        else {
            response.send(html);
        }

    })

});


//using async and await

app.get('', async (request, response)=>{
    response.send( await readFile('./home.html', 'utf8'));
});




app.listen(process.env.PORT || 5000, () => console.log('Server is listening at port http://localhost:5000'));


