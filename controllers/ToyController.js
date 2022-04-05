const Toy = require('../models/Toy')

//show the list of Toy
const index = (req,res,next)=>{
    Toy.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//Show single toy
const show =(req,res,next)=>{
    let toyID = req.body.toyID
    Toy.findById(toyID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })
}

//add new toy
const store = (req, res, next)=>{
    let toy =new Toy({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        
    })
    toy.save()
    .then(response => {
        res.json({
            message: 'Toy Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error Occured!'
        })
    })
}

//update an toy
const update =(req,res,next)=>{
    let toyID = req.body.toyID

    let updatedData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }

    Toy.findByIdAndUpdate(toyID,{$set: updatedData})
    .then(()=>{
        res.json({
            message: 'Toy updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//delete an toy
const destroy =(req,res,next)=>{
    let toyID = req.body.toyID
    Toy.findByIdAndRemove(toyID)
    .then(()=>{
        res.json({
            message: 'Toy deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destroy   
}