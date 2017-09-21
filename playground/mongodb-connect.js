//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db)=>{
  if(err){
    return console.log("unable to vonnect to mongo");
  }
  console.log("Conected to mongo db");

  db.collection('Todos').insertOne({
    text: 'walk the dog',
    completed:false
  }, (err, result) =>{
    if(err){
      return console.log("unable to add to mongo");
    }
    return console.log(JSON.stringify(result.ops, undefined,2 ));

  });


  db.close();
});
