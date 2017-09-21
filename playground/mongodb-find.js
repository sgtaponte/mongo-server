//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db)=>{
  if(err){
    return console.log("unable to vonnect to mongo");
  }
  console.log("Conected to mongo db");

//   db.collection('Todos').find({_id: new ObjectID('59c32e1b88030c4f1825efc8') }).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err)=>{
//     console.log('unable to fetch todos', err);
//   }
// );
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count: ${count}`);
// }, (err)=>{
//   console.log('unable to fetch todos', err);
// }
// );
db.collection('Users').find({name: 'Andrew'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('unable to fetch todos', err);
}
);
  console.log('closing');
   db.close();
});
