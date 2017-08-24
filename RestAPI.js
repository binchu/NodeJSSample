var express = require('express');

var app = express();

var list = [{
    id: 1,
    name: 'Daniel'
},
{
    id:2,
    name: 'Jack'
},
{
    id:3,
    name: 'Smith'
}];


//Get API ----------------------
app.get('/api', function(req,res) {
    if(req.headers.id){
        res.send(list.filter((obj) => {
            return obj.id == req.headers.id;
        }));
    }
    else {
        res.send(list);
    }
    
});


// POST API -------------------------
app.post('/api', function(req,res) {
    var id = req.headers.id;
    var name = req.headers.name;
    list.push({id: id, name: name});
    res.send('User has been added in the list!');
});


// DELETE API -----------------------
app.delete('/api', function(req,res) {
    if(req.headers.id) {        
        list.splice(req.headers.id,1);
    }
    res.send('User has been removed from the list!')
})

var server = app.listen(80, 'localhost', () => {
    console.log('Listening on port 80');
});


