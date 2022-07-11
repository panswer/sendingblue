const express = require('express');

const app = express();

app.post('/', (req, res) => {
    return res.status(201).json({
        message: 'Success'
    })
});

app.listen(3001, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server on port 3001');
    }
});