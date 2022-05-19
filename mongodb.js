// CRUD create read update delete

// const { ObjectID } = require("bson")
// const { MongoClient } = require("mongodb")

// const mongodb = require('mongodb')  // npm library
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'  // local host ip
const databaseName = 'task-manager'  // we can choose any name we want


/*
const id = new ObjectId()
console.log(id)
console.log(id.toHexString())
//console.log(id.getTimestamp())
*/



// connect method to connect to specific server
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => { 
    if(error) {
      return console.log('Unable to connect to database')
    }

    //console.log('Connected correctly')
    //db method on client to get connection for specific database
    const db = client.db(databaseName)  // database reference
  
    /*
    db.collection('users').deleteMany( {
        age:22
    }).then( (result ) => {
      console.log(result)
    }).catch( (error) => {
      console.log(error)

    })
    

    db.collection('tasks').deleteOne( {
      description: 'InterviewBit pe 300 question'
    }).then( (result ) => {
      console.log(result)
    }).catch( (error) => {
      console.log(error)

    })
    */
})
