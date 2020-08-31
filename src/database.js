const mongoose = require("mongoose");

const { MONGODB_DATABASE, MONGODB_HOST } = process.env;

// const MONGODB_URI = `mongodb://${
//     MONGODB_HOST ? MONGODB_HOST : "localhost"
// }/${MONGODB_DATABASE ? MONGODB_DATABASE : "notesdb"}`;


const MONGODB_URI = 'mongodb+srv://crud:crud@cluster0.xrmsq.mongodb.net/notesdb';

mongoose
.connect(MONGODB_URI,{
   useNewUrlParser:true,
   useUnifiedTopology: true,
   useFindAndModify: false,
   useCreateIndex:true
})
.then((db) => console.log('Database is connected', db.connection.host))
.catch((err) => console.log(err));