const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.status(200).send('hello world!');
})

app.listen(3000)

console.log('Running on http://locahost:3000');
