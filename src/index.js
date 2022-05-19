const express  = require('express')
require('./db/mongoose')   // required this file so that mongoose connects to database

//const User = require('./models/user') //no longer needed 
//const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())   // to parse incoming json to an object


app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port '+port)
});


const bcrypt = require('bcryptjs')


const myFunction = async () => {
    const password  = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)  // 8 is how many times hashing algo runs.  small no-> less secure   , large no-> takes to much time to generate hash

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
    console.log(isMatch)
}


myFunction()