const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('hello world')
})
app.get('/users', function(req, res) {
    res.send('user works!')
})
app.get('/users/:id/:name', function(req, res) {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`user ${id} with name ${name} works!`)
})

app.listen(3000, function() {
    console.log('app is listening at port 3000')
})