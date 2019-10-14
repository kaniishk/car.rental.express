const Car = require('mongoose').model('Car')


module.exports = {
    addCarGet: (req, res) => {
        res.render('admin/addCar');
    },
    addCarPost:(req, res)=>{
        
        let newCar ={
            name: req.body.name,
            model: req.body.model,
            capacity: req.body.capacity,
            price: req.body.price,
            year: req.body.year,
            creationDate: Date.now()
        }

        Car.create(newCar).then((obj)=>{
            console.log(obj)
            res.redirect('/')
        })
    },

    deleteCarGet: (req, res) => {
        let page = Number(req.query.page)
        if(Object.keys(req.query).length === 0){
            page = 0
        }
        console.log(req.query)
        let prevPage = page - 1
        let nextPage = page + 1
       
        Car.find({}).where('isRented').equals(false).sort({ year: -1 }).skip(page * 5).limit(5).then(allCar => {

            if (prevPage < 0) prevPage = 0

            let pageObj = {
                prevPage: prevPage,
                nextPage: nextPage
            }
            res.render('admin/deleteCar', { allCar, pageObj })
        })
    },

    deleteCarPost:(req, res)=>{

        Car.findOneAndRemove({_id:req.params.id},(err,doc) =>{
            if(err) console.log(err)
            console.log('Deleted : '+ doc)
        }).then(()=>{
            res.redirect('/')
          
        })
    }

}