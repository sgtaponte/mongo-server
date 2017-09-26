var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo}= require('../models/todos');
var {User} = require('../models/user');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/',(req,res)=>{
  console.log(req.body);
   console.log(req.body.text);
});

app.post('/todo', (req,res)=>{
console.log(req.body.text);
    var newtodo = new Todo({text: req.body.text}
  );
  newtodo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});



app.listen(3000, ()=>{
  console.log('Started on port 3000');
});



// var newTodo = new Todo({
//   text: '  Jerk Off.'
//
//
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e) =>{
//   console.log("Unable to save Todo");
// });
//
//
// //New user model for authentication
// //email property / password // Req/trim email. Set type to string set
// //min length to 1.
//
//
//
// var newUser = new User({
//   email:'kaminski@gmail.com'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved the todo', doc);
// },(e)=>{
//   console.log(`There was an error with user ${e}.`);
// });
