const mongoose      =require('mongoose')
const schema        =mongoose.Schema

const toySchema        = new schema({
    name:{
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
},{timestamps: true})

const Toy = mongoose.model('Toy', toySchema)
module.exports = Toy