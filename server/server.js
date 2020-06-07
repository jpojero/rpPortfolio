const express = require('express');

const app = express();

app.get('/api/people', (req,res) => {
    const people = [
        {id:1,fName:"John", lName:"Doe"},
        {id:2,fName:"Jane", lName:"Doe"}
    ];

    res.json(people);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
