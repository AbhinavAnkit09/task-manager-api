require('../src/db/mongoose')

const User = require('../src/models/user')

// 6265607b4290dceae5b85f1a

// User.findByIdAndUpdate('62664af4f02fd8205abf18fd', { age:19} ).then((aUser) => {
//     console.log(aUser)
//     return User.countDocuments({age:19})
// }).then(( result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// });

const updateAgeAndCount = async (id, age) => {
    const user  = await User.findByIdAndUpdate(id, {age} )
    const count = await User.countDocuments({age})

    return count
}

updateAgeAndCount('62664af4f02fd8205abf18fd',2).then( (count) => {
    console.log(count)

}).catch((e) => {
    console.log(e)
})