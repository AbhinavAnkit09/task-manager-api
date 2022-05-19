require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('626565c94aef3739d8ca4fc6').then((aTask) => {
//     console.log(aTask)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id,status) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: status})

    return count
}

deleteTaskAndCount('62664ac7d5bac5d0890450d8',false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})