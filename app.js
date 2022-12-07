'use strict';

// Imports the express module.
const express = require('express');
const app = express();


/* Endpoints */

// Sends a basic message.
app.get('/Hello', (req, res) => {
    res.type('text');
    res.send('Hello World!');
});

// Sends the area and circumference of the parameter entered.
app.get('/math/circle/:r', (req, res) => {
    const r = req.params.r;

    if(!r) {
        res.type('text');
        res.status(400).send("Missing Required GET parameter: radius");
    }
    if(isNaN(r)) {
        res.type('text');
        res.status(400).send(`Incorrect GET parameter type.\nUsed [${typeof r}], expected [number].`);
    }

    res.type('json')
    const area = Math.round(Math.PI * r * r * 100) / 100;
    const circumference = Math.round(Math.PI * 2 * r * 100) / 100;
    res.json({"area" : area, "circumference" : circumference});
});

// Sends a greeting based on the first and last name queried.
app.get('/hello/name', (req, res) => {
    const first = req.query.first;
    const last = req.query.last;

    res.type('text');

    if(!first && last) {
        res.status(400).send("Missing Required GET parameter: first");
    }
    else if(first && !last) {
        res.status(400).send("Missing Required GET parameter: last");
    }
    else if (!(first && last)) {
        res.status(400).send("Missing Required GET parameters: first, last");
    }
    else {
        res.send(`Hello ${first} ${last}`);
    }
});

app.use(express.static('public'));

// Uses the environment's port. If none is set, defaults to 8000.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
