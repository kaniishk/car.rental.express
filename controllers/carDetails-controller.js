const Car = require('mongoose').model('Car')
const User = require('mongoose').model('User')
const RentedCarInfo = require('mongoose').model('RentedCarInfo')

module.exports = {
    viewDetails: (req, res) => {

        let id = req.params.id
        Car.findById(id).then(foundCar => {
            res.render('carDetails', { foundCar })
        })
    },

    takeCar: (req, res) => {
        let id = req.body.carId
        let userId = req.user._id   
        let RentedCarInfoObj = {} 
        
       

        Car.findOneAndUpdate({_id:id},{isRented:true},{new:true},(err,doc) =>{
            if(err) console.log(err)
            console.log(doc)
        })

        User.findOneAndUpdate({_id:userId},{rentedCars:id},{new:true},(err,doc) =>{
            if(err) console.log(err)
            console.log(doc)
        })

        RentedCarInfoObj={
            car: id,
            user: userId,
            date: req.body.dateOfRental,
            days: req.body.daysOfRental
        }

        Car.findById(id).then(foundCar => {
        RentedCarInfo.create(RentedCarInfoObj).then(()=>{
            res.render('takeCar', { foundCar })
        })
    })

    }
}
