const express = require('express');

const app = express();

const response = `
</p>
    <p> <h1> Full Cycle Rocks! </h1> </p>
    <p> - Lista de nomes cadastrada no banco de dados - </p>
<p> 
`;

app.get('/', (req, res) => {
    res.send(response)
});

app.listen(3000, () => {
    console.log('Listening on port : 3000')
});
