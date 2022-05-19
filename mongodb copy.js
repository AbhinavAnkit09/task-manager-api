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
    //insertOne is aynchronous
    db.collection('users').insertOne( {   
        _id: id,           // we can provide our own object id if we want to
        name: 'Ricky',
        age:26
    }, (error, result) => {
        if(error) {
            return console.log('Unable to inser user')
        }

        console.log(result.insertedId)
    })
    */

    /*
    db.collection('users').insertMany( [ 
        {
            name:'Moond',
            age:22
        }, {
            name : 'Bhola',
            age:22
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert document')
        }

        console.log(result.insertedIds)
    })
    */
    /*
    db.collection('tasks').insertMany( [
        {
            description: 'InterviewBit pe 300 question',
            completed: false
        }, {
            description: 'weight gain',
            completed: false
        }, {
            description : 'breakfast',
            completed: true
        }
    ] , (error, result) => {
        if(error) {
            return console.log('Documents can not be inserted')
        }

        console.log(result.insertedIds)
    })
    */

    db.collection('tasks').findOne( { _id:ObjectId("62625fe36c4896452a8f07c8")}, (error,task) => {
        if(error) {
          return console.log('Unable to fetch')
        }
  
        console.log(task)
  
      })
  
      db.collection('tasks').find( {completed:false}).toArray( (error, tasks) => {
        if(error) {
          return console.log('Unable to fetch')
        }
  
        console.log(tasks)
      })

      
    /*
    db.collection('users').updateOne( {
      _id: ObjectId("62624bcfa34d36f5749eb937")
    }, {
        // $set: {
        //   name:'Abhinav Ankit'
        // }

        $inc: {
          age: 1
        }

    }).then( (result ) => {
      console.log(result)
    }).catch( (error) => {
        console.log(error)
    })
    */

    /*
    db.collection('tasks').updateMany( {
        completed: false
    }, {

        $set: {
          completed: true
        }

    }).then( (result ) => {
      console.log(result)
    }).catch( (error) => {
        console.log(error)
})
*/

    


})


