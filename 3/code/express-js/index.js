const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
let users = [
    { id: 1, name: "Mark", age: 35 },
    { id: 2, name: "Mari", age: 35 }
];
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/users/:id', (req, res) => {
    console.log(req.params)
    let user = users.find(u => u.id == req.params.id); //==, vagy === parseInt()
    console.log(user);
    res.send(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))